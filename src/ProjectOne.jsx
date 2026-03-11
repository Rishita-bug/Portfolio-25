import React from "react"
import "./ProjectOne.css"

const images = Object.fromEntries(
  Object.entries(import.meta.glob("./assets/Personalization-assets/*.{png,webp,gif}", {eager: true}))
  .map(([path, module]) => {
    const fileName = path.split("/").pop().replace(/\.(png|webp|gif)$/, "");
    return [fileName, module.default]
  })
)

const ProjectOne = () => {
  return (
    <div className="p1-container">

      {/* Genesis */}
      <div className="p1-section p1-introduction">
        <span className="p1-label">Introduction</span>
        <div className="p1-section-content">
          <div className="p1-title-desc">
            <h2 className="p1-section-title">What makes a mass manufactured product belong to its user?</h2>
            <div className="p1-section-desc">
              <p>Smartphones are identical to each of its own kind, until their ownership is claimed by a user. <span className="p1-highlight p1-highlight--marker">Over time, with usage, each smartphone becomes completely distinct from another.</span> One would find it disorienting to use another's device.</p>
              <p>The smartphone's pervasiveness into the minutae of individuals' day‑to‑day calls for effective and ethical personalization of these products.</p>
            </div>
          </div>
          <img src={images['genesis-img']} alt="Genesis" className="p1-introduction-img" />
        </div>
      </div>

      {/* Initial Focus */}
      <div className="p1-section p1-challenge">
        <span className="p1-label">Challenge</span>
        <div className="p1-section-content">
          <div className="p1-title-desc">
            <h2 className="p1-section-title">Defining Personalization at a System Level</h2>
            <div className="p1-section-desc">
              <p>As AI capabilities expanded, <span className="p1-highlight p1-highlight--marker">"personalization" was widely referenced but loosely defined.</span> Before proposing new features, we needed clarity on what personalization should mean at a system level.</p>
            </div>
          </div>
          <div className="p1-challenge-grid">
          <figure className="p1-figure">
            <img src={images['theory-icon']} alt="" className="p1-figure-img" />
            <figcaption>Understanding the theoretical concept of personalization.</figcaption>
          </figure>
          <figure className="p1-figure">
            <img src={images['define-icon']} alt="" className="p1-figure-img" />
            <figcaption>Defining personalization and what it can do.</figcaption>
          </figure>
          <figure className="p1-figure">
            <img src={images['interact-icon']} alt="" className="p1-figure-img" />
            <figcaption>Understanding how users engage with personalized experiences.</figcaption>
          </figure>
        </div>
        </div>
      </div>

      {/* Research Questions */}
      <div className="p1-section p1-research-questions">
        <span className="p1-label">Framework</span>
        <div className="p1-framework-content">
          <div className="p1-framework-title-desc">
            <h2 className="p1-section-title">Primary Research</h2>
            <div className="p1-section-desc">
              <p>I conducted user interviews with a pool of 30 participants, both in-person and remotely. The objective was to answer the following questions in each phase of primary research.</p>
            </div>
          </div>
          <div className="p1-framework-grid">
            <div className="p1-research-questions-card">
              <div className="p1-research-questions-text">
                <h4 className="p1-research-questions-title">Perceived Personalization</h4>
                <ul className="p1-research-questions-list">
                  <li>What does "personalized" mean to users?</li>
                  <li>What affects how personalized something is to users?</li>
                </ul>
              </div>
              <div className="p1-card-icon-container"><i className="bi bi-eye p1-card-icon"></i></div>
            </div>
            <div className="p1-research-questions-card">
              <div className="p1-research-questions-text">
                <h4 className="p1-research-questions-title">Ethical Considerations</h4>
                <ul className="p1-research-questions-list">
                  <li>Can something be "too personalized"? Where do users draw the line?</li>
                </ul>
              </div>
              <div className="p1-card-icon-container"><i className="bi bi-shield-check p1-card-icon"></i></div>
            </div>
            <div className="p1-research-questions-card">
              <div className="p1-research-questions-text">
                <h4 className="p1-research-questions-title">Measuring Personalization</h4>
                <ul className="p1-research-questions-list">
                  <li>How can personalization be made more user-friendly?</li>
                  <li>What makes personalization acceptable, and then effective to users?</li>
                </ul>
              </div>
              <div className="p1-card-icon-container"><i className="bi bi-bar-chart-line p1-card-icon"></i></div>
            </div>
          </div>
        </div>
      </div>

      {/* Emerging Focus */}
      <div className="p1-section p1-emerging-focus">
        <span className="p1-label">Intervention</span>
        <div className="p1-section-content">
          <div className="p1-title-desc">
            <h2 className="p1-section-title">Emerging Product Directions</h2>
            <div className="p1-section-desc">
              <p>The defined briefs needed to be focused enough to guide ideation, but broad enough to prompt ideas to manifest <span className="p1-highlight p1-highlight--marker">how personalization behaves across the product ecosystem</span>, beyond a single screen/feature.</p>
            </div>
          </div>
          <div className="p1-intervention-grid">
            <div className="p1-intervention-card">
              <div className="p1-intervention-img-container">
                <img src={images['curation-icon']} alt="" />
              </div>
              <h4 className="p1-intervention-title">Personalized Curation</h4>
              <p className="p1-body-text">Develop intelligent content curation systems that understand user intent, <span className="p1-intervention-highlight p1-intervention-highlight--3">organize information effectively, and enable seamless discovery</span>, transforming the smartphone into a personal knowledge management tool.</p>
            </div>
            <div className="p1-intervention-card">
              <div className="p1-intervention-img-container">
                <img src={images['cohesion-icon']} alt="" />
              </div>
              <h4 className="p1-intervention-title">Personalized Cohesion</h4>
              <p className="p1-body-text">Design a cross-system smartphone experience that operates as an autonomous, data-driven ecosystem by anticipating user needs and enabling <span className="p1-intervention-highlight p1-intervention-highlight--1">cohesive interaction across core apps, content and data.</span></p>
            </div>
            <div className="p1-intervention-card">
              <div className="p1-intervention-img-container">
                <img src={images['connection-icon']} alt="" />
              </div>
              <h4 className="p1-intervention-title">Personalized Connection</h4>
              <p className="p1-body-text">Enhance system communication experiences, such as calling, contacts, and sharing, by incorporating <span className="p1-intervention-highlight p1-intervention-highlight--2">awareness of relationship dynamics</span> to enable more meaningful and efficient interactions.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProjectOne
