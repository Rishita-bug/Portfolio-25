import { useEffect, useRef } from 'react';

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const fillCanvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const fillCanvas = fillCanvasRef.current;
    const ctx = canvas.getContext('2d');
    const fillCtx = fillCanvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      for (const [c, cx] of [[canvas, ctx], [fillCanvas, fillCtx]]) {
        c.width = width * dpr;
        c.height = height * dpr;
        c.style.width = width + 'px';
        c.style.height = height + 'px';
        cx.scale(dpr, dpr);
      }
    };
    resize();

    let anchors = [];
    let animFrame;
    let lastX = null, lastY = null;
    let lastAngle = null;
    let isClosed = false;
    let fillAge = 0;
    const FILL_MAX_AGE = 200;

    const MAX_AGE = 50;
    const MIN_DIST = 110;
    const DIR_THRESHOLD = 25;
    const MAX_ANCHORS = 6;
    const CLOSE_DIST = 65;
    const TENSION = 0.38;

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      if (lastX === null) { lastX = x; lastY = y; return; }

      const dx = x - lastX;
      const dy = y - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MIN_DIST) return;

      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      const angleDiff = lastAngle === null ? 360 : Math.abs(angle - lastAngle);
      const dirChanged = angleDiff > DIR_THRESHOLD && angleDiff < 360 - DIR_THRESHOLD;

      if (lastAngle === null || dirChanged || dist > MIN_DIST * 2) {
        if (anchors.length >= 3) {
          const first = anchors[0];
          const toFirst = Math.sqrt((x - first.x) ** 2 + (y - first.y) ** 2);
          if (toFirst < CLOSE_DIST) { isClosed = true; return; }
        }
        isClosed = false;
        fillAge = 0;
        anchors.push({ x, y, age: 0 });
        if (anchors.length > MAX_ANCHORS) anchors.shift();
        lastAngle = angle;
        lastX = x;
        lastY = y;
      }
    };

    const buildPath = (cx, pts, closed) => {
      cx.beginPath();
      cx.moveTo(pts[0].x, pts[0].y);
      const loop = closed ? [...pts, pts[0]] : pts;

      for (let i = 0; i < loop.length - 1; i++) {
        const src = closed ? loop : pts;
        const p0 = src[Math.max(0, i - 1)];
        const p1 = src[i];
        const p2 = src[i + 1];
        const p3 = src[Math.min(src.length - 1, i + 2)];

        const segLen = Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
        const t1Len = Math.sqrt((p2.x - p0.x) ** 2 + (p2.y - p0.y) ** 2) || 1;
        const t2Len = Math.sqrt((p3.x - p1.x) ** 2 + (p3.y - p1.y) ** 2) || 1;
        const h = segLen * TENSION;

        cx.bezierCurveTo(
          p1.x + ((p2.x - p0.x) / t1Len) * h,
          p1.y + ((p2.y - p0.y) / t1Len) * h,
          p2.x - ((p3.x - p1.x) / t2Len) * h,
          p2.y - ((p3.y - p1.y) / t2Len) * h,
          p2.x, p2.y
        );
      }
      if (closed) cx.closePath();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      fillCtx.clearRect(0, 0, width, height);

      anchors.forEach(a => a.age++);
      anchors = anchors.filter(a => a.age < MAX_AGE);

      if (anchors.length < 2) { animFrame = requestAnimationFrame(draw); return; }

      const overallAlpha = 1 - anchors[Math.floor(anchors.length / 2)].age / MAX_AGE;

      // --- Fill on separate canvas (difference blend mode inverts page content) ---
      if (isClosed || fillAge > 0) {
        fillAge++;
        const fillAlpha = Math.max(0, 1 - fillAge / FILL_MAX_AGE);
        if (fillAlpha > 0) {
          buildPath(fillCtx, anchors, true);
          fillCtx.fillStyle = `rgba(255, 255, 255, ${fillAlpha})`;
          fillCtx.fill();
        }
      }

      // --- Stroke ---
      buildPath(ctx, anchors, isClosed);
      ctx.strokeStyle = `rgba(30, 30, 30, ${overallAlpha * 0.5})`;
      ctx.lineWidth = 1;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.stroke();

      // --- Handles and anchors ---
      anchors.forEach((a, i) => {
        const pointAlpha = 1 - a.age / MAX_AGE;
        const p0 = anchors[Math.max(0, i - 1)];
        const p2 = anchors[Math.min(anchors.length - 1, i + 1)];
        const tLen = Math.sqrt((p2.x - p0.x) ** 2 + (p2.y - p0.y) ** 2) || 1;
        const segLen = Math.sqrt((p2.x - a.x) ** 2 + (p2.y - a.y) ** 2);
        const h = segLen * TENSION;
        const outX = a.x + ((p2.x - p0.x) / tLen) * h;
        const outY = a.y + ((p2.y - p0.y) / tLen) * h;
        const inX  = a.x - ((p2.x - p0.x) / tLen) * h;
        const inY  = a.y - ((p2.y - p0.y) / tLen) * h;

        if (i < anchors.length - 1) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(outX, outY);
          ctx.strokeStyle = `rgba(24, 120, 240, ${pointAlpha * 0.6})`;
          ctx.lineWidth = 0.8; ctx.stroke();
          ctx.beginPath(); ctx.arc(outX, outY, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(24, 120, 240, ${pointAlpha * 0.85})`; ctx.fill();
        }
        if (i > 0) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(inX, inY);
          ctx.strokeStyle = `rgba(24, 120, 240, ${pointAlpha * 0.6})`;
          ctx.lineWidth = 0.8; ctx.stroke();
          ctx.beginPath(); ctx.arc(inX, inY, 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(24, 120, 240, ${pointAlpha * 0.85})`; ctx.fill();
        }

        const s = 5;
        ctx.beginPath(); ctx.rect(a.x - s / 2, a.y - s / 2, s, s);
        ctx.fillStyle = `rgba(255, 255, 255, ${pointAlpha * 0.95})`; ctx.fill();
        ctx.strokeStyle = isClosed
          ? `rgba(24, 120, 240, ${pointAlpha * 0.85})`
          : `rgba(30, 30, 30, ${pointAlpha * 0.85})`;
        ctx.lineWidth = 1.2; ctx.stroke();
      });

      animFrame = requestAnimationFrame(draw);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  const canvasStyle = { position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 };

  return (
    <>
      <canvas ref={fillCanvasRef} style={{ ...canvasStyle, mixBlendMode: 'difference' }} />
      <canvas ref={canvasRef} style={canvasStyle} />
    </>
  );
};

export default CursorTrail;
