import React, { useEffect, useRef, useState } from "react";
import "./ProjectSeven.css";
const CDN = 'https://ik.imagekit.io/pfolio25/pfolio_project_assets/loiter_assets';
const TR = '?tr=f-auto,q-80';
const feature1Video = `${CDN}/feature-1-video.mp4`;
const contextCard1 = `${CDN}/Context-expanded.png${TR}`;
const contextCard2 = `${CDN}/Context%20Card-1.png${TR}`;
const contextBg = `${CDN}/Green%20Leaf%20Close%20Up.jpg${TR}`;
const feature3Img = `${CDN}/feature-3.png${TR}`;
const feature4Img = `${CDN}/feature-4.png${TR}`;
const feature5Img = `${CDN}/feature-5.png${TR}`;
const feature1Bg = `${CDN}/bg-option-5.jpg${TR}`;
const awarenessCard1 = `${CDN}/awareness-card-1.png${TR}`;
const opportunityImg = `${CDN}/opportunity.png${TR}`;
const awarenessCard2 = `${CDN}/awareness-card-2.png${TR}`;
const cardOneBg = `${CDN}/bg-feature-1.png${TR}`;
const insight1Img1 = `${CDN}/insight-1-img-1.png${TR}`;
const insight1Img2 = `${CDN}/insight-1-img-2.png${TR}`;
const entryPointsPlaceholder = `${CDN}/entry-points-placeholder.png${TR}`;
const entryPoints1 = `${CDN}/entry-points-1.png${TR}`;
const entryPoints2 = `${CDN}/entry-points-2.png${TR}`;
const KF = `${CDN}/key-flows`;
const map2 = `${KF}/map-2.mov`;
const map3 = `${KF}/map-3.mov`;
const reflection1 = `${KF}/reflection-1.mov`;
const reflection2 = `${KF}/reflection-2.mov`;
const onboardingBg = `${KF}/onboarding-bg.png${TR}`;
const map1 = `${KF}/map-1.png${TR}`;
const map4 = `${KF}/map-4.png${TR}`;
const map5 = `${KF}/map-5.png${TR}`;
const reflection3 = `${KF}/reflection-3.png${TR}`;
const reflection4 = `${KF}/reflection-4.png${TR}`;
const home1 = `${KF}/home-1.png${TR}`;
const home2 = `${KF}/home-2.png${TR}`;
const home3 = `${KF}/home-3.jpg${TR}`;
const onboarding1 = `${KF}/Onboarding-1.png${TR}`;
const onboarding2 = `${KF}/Onboarding-2.png${TR}`;
const onboarding3 = `${KF}/Onboarding-3.png${TR}`;
const onboarding4 = `${KF}/Onboarding-4.png${TR}`;
const onboarding5 = `${KF}/Onboarding-5.png${TR}`;
const onboarding6 = `${KF}/Onboarding-6.png${TR}`;
const onboarding7 = `${KF}/Onboarding-7.png${TR}`;
const onboarding8 = `${KF}/Onboarding-8.png${TR}`;

const MAGNIFIER_SIZE = 140;
const ZOOM = 2.8;

const MagnifyImage = ({ src }) => {
  const [pos, setPos] = useState({ x: 0, y: 0, bgX: 50, bgY: 50 });
  const [active, setActive] = useState(false);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({
      x,
      y,
      bgX: (x / rect.width) * 100,
      bgY: (y / rect.height) * 100,
    });
  };

  return (
    <div
      ref={containerRef}
      className="p7-magnify-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <img src={src} className="p7-onboarding-screen" alt="" />
      {active && (
        <div
          className="p7-magnifier"
          style={{
            left: pos.x,
            top: pos.y,
            backgroundImage: `url(${src})`,
            backgroundSize: `${ZOOM * 100}%`,
            backgroundPosition: `${pos.bgX}% ${pos.bgY}%`,
            width: MAGNIFIER_SIZE,
            height: MAGNIFIER_SIZE,
          }}
        />
      )}
    </div>
  );
};

const ProjectSeven = () => {
  const headlineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const onboardingRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissingTooltip, setDismissingTooltip] = useState(false);
  const tooltipShownRef = useRef(false);

  const dismissTooltip = () => {
    setDismissingTooltip(true);
    setTimeout(() => { setShowTooltip(false); setDismissingTooltip(false); }, 600);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (headlineRef.current) {
      observer.observe(headlineRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tooltipShownRef.current) {
          tooltipShownRef.current = true;
          setShowTooltip(true);
          setTimeout(() => dismissTooltip(), 4000);
        }
      },
      { threshold: 0, rootMargin: '0px 0px -60% 0px' }
    );

    if (onboardingRef.current) {
      observer.observe(onboardingRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="p7-container">
      <div className="p7-insights-section">
        <span className="p7-label">Insights</span>

        <div className="p7-insights-list">

          <div className="p7-insight-block">
            <div className="p7-insight-row">
              <h3 className="p7-insight-title">The Role of Urban Green Spaces in Citizens' Well-being</h3>
              <p className="p7-insight-description">Parks are not mere casual spaces, but are psychologically important to urban citizens who seek restoration and presence.</p>
            </div>
            <div className="p7-insight-images">
              <div className="p7-insight-img-item">
                <img src={insight1Img1} alt="" className="p7-insight-img" />
              </div>
              <div className="p7-insight-img-item">
                <img src={insight1Img2} alt="" className="p7-insight-img" />
                <p className="p7-insight-img-caption">Reasons visitors cited for going to parks</p>
              </div>
            </div>
            <p className="p7-citation-text">Chiesura, Anna. "The Role of Urban Parks for the Sustainable City." Landscape and Urban Planning, vol. 68, no. 1, 2004, pp. 129–138. Elsevier.</p>
          </div>

          <div className="p7-insight-block">
            <div className="p7-insight-row">
              <h3 className="p7-insight-title">Inconsistent<br />Ecological Awareness</h3>
              <p className="p7-insight-description">Despite the desire to observe, engagement depth varies. A study of 208 visitors found that species recognition varied significantly for common flora and fauna.</p>
            </div>
            <div className="p7-stat-cards">
              <div className="p7-stat-card-new">
                <div className="p7-stat-card-img-wrap">
                  <img src={awarenessCard1} alt="" className="p7-stat-card-img" />
                </div>
                <div className="p7-stat-card-content">
                  <span className="p7-stat-card-metric">15–17%</span>
                  <p className="p7-stat-card-desc">could identify common trees</p>
                </div>
              </div>
              <div className="p7-stat-card-new">
                <div className="p7-stat-card-img-wrap">
                  <img src={awarenessCard2} alt="" className="p7-stat-card-img" />
                </div>
                <div className="p7-stat-card-content">
                  <span className="p7-stat-card-metric">2–8%</span>
                  <p className="p7-stat-card-desc">could identify common birds</p>
                </div>
              </div>
            </div>
            <p className="p7-citation-text">Basu, Sukanya, and Harini Nagendra. "Perceptions of Park Visitors on Access to Urban Parks and Benefits of Green Spaces." Urban Forestry & Urban Greening, vol. 57, 2021.</p>
          </div>

          <div className="p7-insight-block">
            <div className="p7-insight-row">
              <h3 className="p7-insight-title">Fragmented Discovery</h3>
              <p className="p7-insight-description">There is no structured discovery layer for available resources like guided nature walks, events, and interpretive information about the ecology of the space.</p>
            </div>
            <div className="p7-fragment-grid">
              <div className="p7-fragment-item">
                <i className="bi bi-search p7-fragment-icon"></i>
                <p className="p7-fragment-desc">A national audit identified only <span className="p7-fragment-highlight">~8 dedicated websites</span> focused on nature walks, despite growing visibility.</p>
              </div>
              <div className="p7-fragment-item">
                <i className="bi bi-diagram-3 p7-fragment-icon"></i>
                <p className="p7-fragment-desc">Information is dispersed across <span className="p7-fragment-highlight">NGO pages, WhatsApp groups, Meetup listings, and word of mouth</span>.</p>
              </div>
            </div>
            <p className="p7-citation-text">Bharati, Anjali, and V. V. Binoy. "Sharing the Joy of Observing Nature: A Study of Nature Walks in India." National Institute of Advanced Studies, 2025.</p>
          </div>

        </div>
      </div>

      <div className="p7-solution-section">
        <span className="p7-label">Opportunity</span>
        <div className="p7-solution-header">
          <h2 className="p7-solution-title">What is Loiter?</h2>
          <p className="p7-solution-desc">Loiter is a <span className="p7-solution-highlight p7-highlight">companion app for urban green spaces</span> featuring a seasonal tree map that responds to the user's movement, signaling nearby ecological elements.</p>
        </div>
        <img src={opportunityImg} alt="Loiter opportunity" className="p7-solution-img" />
      </div>

      <div className="p7-objectives-section">
        <span className="p7-label">Objectives</span>
        <dl className="p7-objectives-list">
          <div className="p7-objective">
            <div className="p7-objective-icon">
              <i className="bi bi-hourglass"></i>
            </div>
            <dt>Invite unhurried engagement</dt>
            <dd>Surface seasonal changes, activities, and points of interest to encourage deeper exploration and repeat visits.</dd>
          </div>
          <div className="p7-objective">
            <div className="p7-objective-icon">
              <i className="bi bi-cursor"></i>
            </div>
            <dt>Support ongoing exploration</dt>
            <dd>Enable curiosity-led, self-paced discovery that lets visitors engage deliberately with their surroundings.</dd>
          </div>
          <div className="p7-objective">
            <div className="p7-objective-icon">
              <i className="bi bi-heart"></i>
            </div>
            <dt>Cultivate lasting connection</dt>
            <dd>Build meaningful relationships with the space through moments of familiarity, discovery, and resonance.</dd>
          </div>
        </dl>
      </div>

      <div className="p7-features-section">
        <span className="p7-label">Features</span>
        <div className="p7-features-grid">
          <div className="p7-feature-card p7-feature-card-video" style={{backgroundImage: `url(${cardOneBg})`, backgroundSize: 'contain', backgroundPosition: '70% bottom', backgroundRepeat: 'no-repeat'}}>
            <div className="p7-feature-video-blur-container">
              <video
                className="p7-feature-video-blur"
                src={feature1Video}
                autoPlay
                loop
                muted
                playsInline
                ref={(el) => { if (el) el.playbackRate = 0.7; }}
              />
            </div>
            <div className="p7-video-color-overlay"></div>
            <video
              className="p7-feature-video"
              src={feature1Video}
              autoPlay
              loop
              muted
              playsInline
              ref={(el) => { if (el) el.playbackRate = 0.7; }}
            />
            <div className="p7-dynamic-island"></div>
            <span className="p7-feature-text">Location&#8209;responsive seasonal tree map</span>
          </div>
          <div className="p7-feature-card p7-feature-card-context" style={{backgroundImage: `linear-gradient(rgba(56, 108, 66, 0.75), rgba(56, 108, 66, 0.75)), url(${contextBg})`}}>
            <span className="p7-feature-text">Context&#8209;aware ecological detection</span>
            <div className="p7-context-images-grid">
              <div className="p7-context-img-container p7-context-img-first">
                <img src={contextCard2} alt="" className="p7-context-img" />
              </div>
              <div className="p7-context-img-container">
                <img src={contextCard1} alt="" className="p7-context-img" />
              </div>
            </div>
          </div>
          <div className="p7-feature-card p7-feature-card-season" style={{'--bg': `url(${feature1Bg})`}}>
            <span className="p7-feature-text">What's in season?</span>
            <div className="p7-feature-content-img-container p7-season-img-container">
              <img src={feature4Img} className="p7-feature-content-img p7-season-img" alt="" />
            </div>
          </div>
          <div className="p7-feature-card p7-feature-card-discovery">
            <span className="p7-feature-text">Discovery for Activities and Events</span>
            <div className="p7-feature-content-img-container p7-discovery-img-container">
              <img src={feature5Img} className="p7-feature-content-img p7-discovery-img" alt="" />
            </div>
          </div>
          <div className="p7-feature-card p7-feature-card-feedback" style={{backgroundImage: `url(${feature3Img})`}}>
            <span className="p7-feature-text">Trail feedback and reward system</span>
          </div>
        </div>
      </div>

      <div className="p7-principles-section">
        <span className="p7-label">UI Principles</span>
        <dl className="p7-principles-list">
          <div className="p7-principle">
            <dt>Attentional restraint</dt>
            <dd>The interface remains visually restrained and unobtrusive, inviting interaction without competing for attention.</dd>
          </div>
          <div className="p7-principle">
            <dt>Spatial continuity</dt>
            <dd>Content appears within the existing map context, maintaining orientation and avoiding disruptive transitions.</dd>
          </div>
          <div className="p7-principle">
            <dt>Physical presence</dt>
            <dd>Interactions are brief, contextual and encourage users to remain present in their surroundings.</dd>
          </div>
          <div className="p7-principle">
            <dt>Progressive disclosure</dt>
            <dd>Information is revealed gradually based on context and intent, preventing cognitive overload.</dd>
          </div>
          <div className="p7-principle">
            <dt>Long-term engagement</dt>
            <dd>Ecological elements change with seasons, creating new moments of discovery across visits.</dd>
          </div>
        </dl>
      </div>

      <div className="p7-keyflows-section">
        <span className="p7-label">Key Flows</span>
        <div className="p7-keyflows-group">
        <h3 className="p7-keyflows-group-title">Entry Points</h3>
        <div className="p7-keyflows-grid">
          <div className="p7-keyflow-card">
            <span className="p7-keyflow-badge">1</span>
            <img className="p7-keyflow-img" src={entryPoints1} alt="" />
            <div className="p7-keyflow-card-content">
              <h3 className="p7-keyflow-title">Navigation Apps</h3>
              <p className="p7-keyflow-desc">Visitors discover the app while commuting to the park or garden.</p>
            </div>
          </div>
          <div className="p7-keyflow-card">
            <span className="p7-keyflow-badge">2</span>
            <img className="p7-keyflow-img" src={entryPoints2} alt="" />
            <div className="p7-keyflow-card-content">
              <h3 className="p7-keyflow-title">Park Entrance</h3>
              <p className="p7-keyflow-desc">Visitors encounter the app immediately upon entering the park.</p>
            </div>
          </div>
          <div className="p7-keyflow-card">
            <span className="p7-keyflow-badge">3</span>
            <img className="p7-keyflow-img" src={entryPointsPlaceholder} alt="" />
            <div className="p7-keyflow-card-content">
              <h3 className="p7-keyflow-title">Locations Within the Park</h3>
              <p className="p7-keyflow-desc">Visitors discover the app at key locations inside the space.</p>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="p7-onboarding-section" ref={onboardingRef}>
        {showTooltip && (
          <div className={`p7-magnify-tooltip${dismissingTooltip ? ' p7-magnify-tooltip--dismissing' : ''}`}>
            <span>Hover over the images to magnify!</span>
            <button className="p7-magnify-tooltip-dismiss" onClick={dismissTooltip}>✕</button>
          </div>
        )}
        <div className="p7-onboarding-ambient" style={{backgroundImage: `url(${onboardingBg})`}} />
        <div className="p7-onboarding-grid">
          {/* Row 1: text(span2) | empty | screen1 | screen2 */}
          <div className="p7-onboarding-text-cell">
            <h3 className="p7-onboarding-title">Onboarding</h3>
            <p className="p7-onboarding-desc">Ensures that first-time users quickly understand the app's scope (mapped botanical gardens only), grant or substitute location access, and are routed to the nearest available tree map to experience immediate value.</p>
          </div>
          <div className="p7-onboarding-cell--empty" />
          <div className="p7-onboarding-cell--screen">
            <MagnifyImage src={onboarding1} />
          </div>
          <div className="p7-onboarding-cell--screen">
            <MagnifyImage src={onboarding2} />
          </div>
          {/* Row 2: empty | screen3 | screen4 | screen5 | screen6 */}
          <div className="p7-onboarding-cell--empty" />
          <div className="p7-onboarding-cell--screen">
            <MagnifyImage src={onboarding3} />
          </div>
          <div className="p7-onboarding-cell--screen">
            <MagnifyImage src={onboarding4} />
          </div>
          <div className="p7-onboarding-cell--screen">
            <MagnifyImage src={onboarding5} />
          </div>
          <div className="p7-onboarding-cell--screen">
            <MagnifyImage src={onboarding6} />
          </div>
          {/* Row 3: screen7 | screen8 | empty | empty | empty */}
          <div className="p7-onboarding-cell--screen">
            <MagnifyImage src={onboarding7} />
          </div>
          <div className="p7-onboarding-cell--screen">
            <MagnifyImage src={onboarding8} />
          </div>
          <div className="p7-onboarding-cell--empty" />
          <div className="p7-onboarding-cell--empty" />
          <div className="p7-onboarding-cell--empty" />
        </div>
      </div>

      <div className="p7-map-section">
        <div className="p7-map-grid">
          {/* Row 1: main title+desc | map-1 | map-2 | passive title+desc */}
          <div className="p7-map-text-cell p7-map-text-cell--wide">
            <h3 className="p7-map-title">The Map</h3>
            <p className="p7-map-desc">This is the primary exploration interface. It translates physical proximity into ecological awareness through detection feedback, contextual prompts, and layered information.</p>
          </div>
          <div className="p7-map-screen-cell p7-map-screen--map1">
            <MagnifyImage src={map1} />
          </div>
          <div className="p7-map-screen-cell">
            <video className="p7-map-video" src={map2} autoPlay loop muted playsInline />
          </div>
          <div className="p7-map-text-cell p7-map-text-cell--wide p7-map-cell--passive">
            <h3 className="p7-map-subtitle">Passive Discovery</h3>
            <p className="p7-map-desc">As users walk through a mapped garden, the app detects nearby ecological elements. The top context card shows the nearest landmark, progress (elements observed out of total), and distance walked.</p>
            <p className="p7-map-desc">A small indicator changes state when something is detected and turns into a badge with a count. When available, users can expand it to see what to look out for and mark elements as spotted.</p>
          </div>
          {/* Row 2: empty | screens | active title+desc */}
          <div />
          <div className="p7-map-screen-cell">
            <video className="p7-map-video" src={map3} autoPlay loop muted playsInline />
          </div>
          <div className="p7-map-screen-cell p7-map-screen--map4">
            <MagnifyImage src={map4} />
          </div>
          <div className="p7-map-screen-cell p7-map-screen--map5">
            <MagnifyImage src={map5} />
            <p className="p7-map-caption">The bottom sheet includes a context menu for participatory and civic actions.</p>
          </div>
          <div className="p7-map-text-cell p7-map-text-cell--wide p7-map-cell--active">
            <h3 className="p7-map-subtitle">Active Exploration</h3>
            <p className="p7-map-desc">Users can select a tree directly on the 3D map. The first tap shows a tooltip. A second tap opens a bottom sheet with detailed information.</p>
            <p className="p7-map-desc">The sheet includes visual identifiers (such as leaf or bark features), associated life around the tree ("Tree Friends"), and short facts or sounds.</p>
          </div>
        </div>
      </div>

      <div className="p7-skip-onboarding-section">
        <div className="p7-skip-grid">
          {/* Row 1: title+desc (span 2) | home-1 | home-2 */}
          <div className="p7-skip-text-cell">
            <h3 className="p7-skip-title">Skipping Onboarding</h3>
            <p className="p7-skip-desc">When users skip onboarding, they are taken to the Home screen. This surface introduces the garden experience through curated content rather than immediate map interaction.</p>
          </div>
          <div className="p7-skip-screen-cell">
            <MagnifyImage src={home1} />
          </div>
          <div className="p7-skip-screen-cell">
            <MagnifyImage src={home2} />
          </div>
          {/* Row 2: popover-text | empty | home-3 | themed-trails-text */}
          <div className="p7-skip-body-cell p7-skip-body-cell--popover">
            <p className="p7-skip-body-text">A popover prompts users to switch to the Tree Map. This ensures the core experience remains discoverable even when users enter through Home instead of onboarding.</p>
          </div>
          <div />
          <div className="p7-skip-screen-cell">
            <MagnifyImage src={home3} />
          </div>
          <div className="p7-skip-body-cell p7-skip-body-cell--popover">
            <p className="p7-skip-body-text">Offers self-guided trails based on themes. Trails follow a predefined path and can be customized. This feature uses AI to generate context-aware routes.</p>
          </div>
        </div>
      </div>

      <div className="p7-reflection-section">
        <div className="p7-reflection-grid">
          {/* Row 1: title+desc (span 2) | video1 | video2 | during-walk text (span 2) */}
          <div className="p7-reflection-text-cell">
            <h3 className="p7-reflection-title">Reflection</h3>
            <p className="p7-reflection-desc">This flow captures the user's activity and observations, both in real time and after the walk. It provides measurable feedback, highlights patterns in movement and attention, and tracks longer-term progress across visits and seasons.</p>
          </div>
          <div className="p7-reflection-screen-cell">
            <video className="p7-reflection-video" src={reflection1} autoPlay loop muted playsInline />
          </div>
          <div className="p7-reflection-screen-cell">
            <video className="p7-reflection-video" src={reflection2} autoPlay loop muted playsInline />
          </div>
          <div className="p7-reflection-subtitle-cell">
            <h4 className="p7-reflection-subtitle">During the Walk</h4>
            <p className="p7-reflection-subdesc">Users can view a live graph of their walk, showing pace and moments of observation over time. They can also see how their current trail compares to previous visits.</p>
            <p className="p7-reflection-subdesc">The metrics are designed to encourage steadiness and attentiveness rather than constant movement.</p>
          </div>
          {/* Row 2: empty | reflection3 | [reflection4 + after-walk text] */}
          <div />
          <div className="p7-reflection-screen-cell">
            <MagnifyImage src={reflection3} />
          </div>
          <div className="p7-reflection-row2-wrapper">
            <div className="p7-reflection-screen-cell">
              <MagnifyImage src={reflection4} />
            </div>
            <div className="p7-reflection-subtitle-cell p7-reflection-subtitle-cell--after">
              <h4 className="p7-reflection-subtitle">After the Walk</h4>
              <p className="p7-reflection-subdesc">At the end of the visit, users receive a summary of their observations, trail uniqueness, and stillness score. Progress is contextualized within the current season and across visits.</p>
              <p className="p7-reflection-subdesc">Achievements recognize sustained attention over time. The system reinforces thoughtful exploration instead of competition or speed.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p7-why-section">
        <span className="p7-label">Why it Matters</span>
        <div className="p7-why-header">
          <h2 className="p7-why-title">Limited Per Capita Green&nbsp;Space in Indian Cities</h2>
          <div className="p7-why-text">
            <p>Urban green space in Indian cities per capita is limited. When the space is limited, experience quality matters.</p>
            <p>In 2025, per capita urban green space in most Indian megacities remains significantly below the World Health Organization (WHO) recommended 9 m² and national guidelines of 10–12 m².</p>
          </div>
        </div>
        <div className="p7-vertical-chart" style={{'--max-height': '320px', '--max-value': '22'}}>
          <div className="p7-chart-bars-area">
            <div className="p7-benchmark-line" style={{'--value': '9'}}>
              <span className="p7-benchmark-line-label">9 m²</span>
            </div>
            <div className="p7-benchmark-line p7-benchmark-line--india" style={{'--value': '11'}}>
              <span className="p7-benchmark-line-label">10–12 m²</span>
            </div>
            <div className="p7-chart-bars-inner">
              <div className="p7-chart-bar p7-highlight-bar" style={{'--value': '22'}} data-value="22.00" />
              <div className="p7-chart-bar" style={{'--value': '2'}} data-value="2.00" />
              <div className="p7-chart-bar" style={{'--value': '1.18'}} data-value="1.08–1.28" />
              <div className="p7-chart-bar" style={{'--value': '0.81'}} data-value="0.81" />
              <div className="p7-chart-bar" style={{'--value': '0.67'}} data-value="0.67" />
              <div className="p7-chart-bar" style={{'--value': '0.50'}} data-value="0.50" />
              <div className="p7-chart-bar" style={{'--value': '0.75'}} data-value="~0.50–1.00" />
            </div>
          </div>
          <div className="p7-chart-labels-row">
            <span className="p7-chart-bar-label">Delhi</span>
            <span className="p7-chart-bar-label">Bengaluru</span>
            <span className="p7-chart-bar-label">Mumbai</span>
            <span className="p7-chart-bar-label">Chennai</span>
            <span className="p7-chart-bar-label">Kolkata</span>
            <span className="p7-chart-bar-label">Ahmedabad</span>
            <span className="p7-chart-bar-label">Hyderabad</span>
          </div>
          <div className="p7-chart-key">
            <span className="p7-chart-key-item">
              <span className="p7-chart-key-line p7-chart-key-line--solid" />
              WHO minimum
            </span>
            <span className="p7-chart-key-item">
              <span className="p7-chart-key-line p7-chart-key-line--dashed" />
              National guideline
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSeven;
