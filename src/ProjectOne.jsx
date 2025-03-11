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
    <div className = "p1-container">

      <div className = "genesis-container section">
        <h2 className = "section-title">Project Genesis</h2>
        <div className = " genesis-content section-content">
          <img src = {images['genesis-img']}/>
          <div>
            <p className = "genesis-big-text">
              what makes a mass manufactered product belong to its user?
            </p>
            <p className = "genesis-text">
              Smartphones are mass manufactured products. They are identical to each of its own kind, until their ownership is claimed by a user. Over time, with usage, each smartphone becomes completely distinct from another. One would find it disorienting to use another’s device. The smartphone’s pervasiveness into the minutae of individuals’ day-to-day calls for effective and ethical personalization of these products.
            </p>
          </div>
          
        </div>
      </div>
      
      <div className = "scope-container section">
        <h2 className = "section-title">Scope</h2>
        <div className = " scope-content section-content">
          <p className = "scope-description">The project began as an open-ended exploration into personalization. Over time, the scope narrowed down to Personalization Curation of content in smartphones to ensure that the devised Guidelines for desigining personalized user experiences were illustrated through tangible examples.</p>
          <div className= "initial-focus scope-subsection">
            <h3 className = "subsection-h3">Initial Focus</h3>
            <div className = "subsection-grid">
              <figure>
                <img src = {images['theory-icon']}/>
                <figcaption>Understanding the theoretical concept of personalization.</figcaption>
              </figure>
              <figure>
                <img src = {images['define-icon']}/>
                <figcaption>Defining personalization and what it can do.</figcaption>
              </figure>
              <figure>
                <img src = {images['interact-icon']}/>
                <figcaption>Understanding how users engage with personalization around them (through everyday-life and products/services).</figcaption>
              </figure>
            </div>
          </div>
          <div className= "research-questions scope-subsection">
            <h3 className = "subsection-h3">Research Questions</h3>
            <div className = "subsection-grid">
              <div className = "question-category">
                <img src = {images['perception-icon']}/>
                <h4>Perceived Personalization</h4>
                <ul>
                  <li>What does “personalized” mean to users?</li>
                  <li>What affects how personalized something is to users?</li>
                </ul>
              </div>
              <div className = "question-category">
                <img src = {images['ethics-icon']}/>
                <h4>Ethical Considerations</h4>
                <ul>
                  <li>Can something be ”too personalized”? Where do users draw the line?</li>
                </ul>
              </div>
              <div className = "question-category last-question">
                <img src = {images['measuring-icon']}/>
                <h4>Measuring Personalization</h4>
                <ul>
                  <li>How can personalization be made more user-friendly?</li>
                  <li>What makes personalization acceptable, and then effective to users?</li>
                </ul>
              </div>
            </div>
          </div>
          <div className= "emerging-focus scope-subsection">
            <h3 className = "subsection-h3">Emerging Focus</h3>
            <div className = "subsection-grid">
              <div className = "opportunity">
                <img src = {images['curation-icon']}/>
                <h4>Personalized Curation</h4>
                <p>Enhance smartphone functionality by developing intelligent content curation systems that understand user intent, optimize content organization, and facilitate effortless discovery, ultimately transforming devices into powerful personal knowledge management tools.</p>
              </div>
              <div className = "opportunity">
                <img src = {images['cohesion-icon']}/>
                <h4>Personalized Cohesion</h4>
                <p>A personal device that functions as autonomous, data-driven ecosystem, anticipating user needs and delivering a cohesive experience through intelligent interaction between applications, content, and data.</p>
              </div>
              <div className = "opportunity">
                <img src = {images['connection-icon']}/>
                <h4>Personalized Connection</h4>
                <p>Revolutionize digital communication by developing technology that recognizes the unique dynamics between individuals, enabling more meaningful and efficient interactions across various platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className = "approach-container section">
        <h2 className = "section-title">Approach</h2>
        <div className = " approach-content section-content">
          <div>
            <h4>Staggered introduction of the smartphone:</h4>
            <p>Leveraging the open-ended nature of the brief, introduction of the smartphone into the research was delayed until the second phase.</p>
          </div>
          <div>
            <h4>Qualitative research method & Diverse participant pool:</h4>
            <p>Conducted near-conversational interviews to gain deep insights. 31 participants were interviewed over 3 progressively narrow phases—both in-person and remotely.</p>
          </div>
          <div>
            <h4>Structured research phases:</h4>
            <p>Clearly defined objectives for each phase ensured a structured approach.</p>
          </div>
          <div>
            <h4>Goal:</h4>
            <p>To developed a holistic, unbiased understanding of “Personalization” to identify real-world opportunities for intelligent smartphones while addressing user and practitioner concerns.</p>
          </div>
        </div>
      </div>
      
      <div className = "methodology-container section">
        <h2 className = "section-title">Methodology</h2>
        <div className = "methodology-content section-content">
          <img src = {images['timeline']}/>
        </div>
      </div>
      
      <div className = "takeaways-container section">
        <h2 className = "section-title">Takeaways</h2>
        <div className = " takeaways-content section-content">
          <ul>
            <li>Concise documentation of the research for better knowledge-sharing in a team.</li>
            <li>When designing for a product that is deeply embeded in everyday life, and used for a wide range of purposes, research must focus on broad user behaviors rather than specific tasks, making it more exploratory.</li>
            <li>Balancing exploration with decisiveness in the UX process.</li>
          </ul>
        </div>
      </div>
      

    </div>
  )
}

export default ProjectOne
