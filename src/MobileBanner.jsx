import React, { useState, useEffect } from 'react'
import './MobileBanner.css'

function MobileBanner() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  const dismiss = () => {
    setFading(true)
    setTimeout(() => setVisible(false), 400)
  }

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 4000)
    const hideTimer = setTimeout(() => setVisible(false), 4400)
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer) }
  }, [])

  if (!visible) return null

  return (
    <div className={`mobile-banner${fading ? ' mobile-banner--fade' : ''}`}>
      <p className="mobile-banner-text">
        Psst — this website is best viewed on a bigger screen for now!
      </p>
      <button className="mobile-banner-dismiss" onClick={dismiss}>✕</button>
    </div>
  )
}

export default MobileBanner
