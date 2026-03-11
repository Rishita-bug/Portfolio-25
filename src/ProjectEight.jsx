import React, { useRef, useState } from "react";
import "./ProjectEight.css";
const CDN_T = 'https://ik.imagekit.io/pfolio25/pfolio_project_assets/thesys_assets';
const TR_T = '?tr=f-auto,q-80';
const intro1 = `${CDN_T}/intro-1.png${TR_T}`;
const scope = `${CDN_T}/scope.png${TR_T}`;
const intro2 = `${CDN_T}/intro-2.png${TR_T}`;
const copilot = `${CDN_T}/co-pilot.png${TR_T}`;
const dashboard = `${CDN_T}/dashboard.png${TR_T}`;
const canvas = `${CDN_T}/canvas.png${TR_T}`;
const outcomeMov = `${CDN_T}/outcome.mov`;

const ProjectEight = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="p8-container">

      {/* Introduction */}
      <div className="p8-section">
        <div className="p8-section-header">
          <span className="p8-label">Introduction</span>
          <h2 className="p8-section-title">What is Generative UI?</h2>
          <p className="p8-section-desc">Generative UI is a fully functional interface that LLMs respond with on-the-spot, by assembling UI components based on what you need, as opposed to markdown text responses and hardcoded UI for specific (hence, limited) use cases.</p>
        </div>
        <div className="p8-intro-images">
          <div className="p8-intro-image-item">
            <img src={intro1} alt="Static UI" className="p8-intro-img" />
            <p className="p8-img-caption">Static UI</p>
          </div>
          <div className="p8-intro-image-item">
            <img src={intro2} alt="Generative UI" className="p8-intro-img" />
            <p className="p8-img-caption">Generative UI</p>
          </div>
        </div>

        <div className="p8-intro-subsection">
          <div className="p8-section-header">
            <h2 className="p8-section-title">Static Interfaces in the Era of Dynamic AI Workflows</h2>
            <div className="p8-section-desc">
              <p>In AI apps, workflows are defined by the user through prompts. Users can ask anything, anytime in any sequence. Most AI apps handle these dynamic workflows through plain text.</p>
              <p>While the content changes, its presentation remains limited to markdown and a handful of hard-coded elements for popular use cases.</p>
              <p>The same model answering your query also decides how to match the content to the appropriate UI, assembling it in real time across any AI form factor.</p>
            </div>
          </div>
          <div className="p8-intro-cards">
            <div className="p8-intro-card">
              <img src={copilot} alt="Co-pilots" className="p8-intro-card-img" />
              <div className="p8-intro-card-content">
                <h3 className="p8-intro-card-title">Co-pilots</h3>
                <p className="p8-intro-card-desc">Inline UI that adapts to the task within existing tools.</p>
              </div>
            </div>
            <div className="p8-intro-card">
              <img src={dashboard} alt="AI Dashboards" className="p8-intro-card-img" />
              <div className="p8-intro-card-content">
                <h3 className="p8-intro-card-title">AI Dashboards</h3>
                <p className="p8-intro-card-desc">Data views assembled from natural language, not pre-built reports.</p>
              </div>
            </div>
            <div className="p8-intro-card">
              <img src={canvas} alt="Canvas" className="p8-intro-card-img" />
              <div className="p8-intro-card-content">
                <h3 className="p8-intro-card-title">Canvas</h3>
                <p className="p8-intro-card-desc">AI responses as draggable, connectable blocks on an infinite whiteboard.</p>
              </div>
            </div>
          </div>
          <p className="p8-and-more">...and more</p>
        </div>

      </div>

      {/* Research Objectives */}
      <div className="p8-section">
        <span className="p8-label">Research Objectives</span>
        <div className="p8-objectives-grid">
          <div className="p8-objective-item">
            <div className="p8-objective-icon-wrap p8-objective-icon-wrap--red">
              <i className="bi bi-bandaid p8-objective-icon p8-objective-icon--red"></i>
            </div>
            <p className="p8-objective-text">What are the <span className="p8-objective-highlight">user expectations and potential gaps in the UX</span> of traditional AI chatbot interfaces?</p>
          </div>
          <div className="p8-objective-item">
            <div className="p8-objective-icon-wrap p8-objective-icon-wrap--green">
              <i className="bi bi-patch-check p8-objective-icon p8-objective-icon--green"></i>
            </div>
            <p className="p8-objective-text">Does <span className="p8-objective-highlight">Generative UI address potential gaps</span> in user expectations and experience from AI chatbots?</p>
          </div>
          <div className="p8-objective-item">
            <div className="p8-objective-icon-wrap p8-objective-icon-wrap--purple">
              <i className="bi bi-person p8-objective-icon p8-objective-icon--purple"></i>
            </div>
            <p className="p8-objective-text">How does Generative UI affect <span className="p8-objective-highlight">user engagement, comprehension, and task efficiency</span>?</p>
          </div>
        </div>
      </div>

      {/* Scope */}
      <div className="p8-section">
        <div className="p8-section-header">
          <span className="p8-label">Scope</span>
          <h2 className="p8-section-title">Generative UI in AI Chat</h2>
          <div className="p8-section-desc">
            <p>The scope of this research is limited to Generative UI implemented in general-purpose AI chatbots like ChatGPT, Gemini, Claude etc.</p>
            <p>As part of the user study, participants used their go-to chatbots alongside a GenUI demo, "C1 Chat" (Claude + C1) for the same queries.</p>
          </div>
        </div>
        <img src={scope} alt="Scope" className="p8-scope-img" />
      </div>

      {/* Methodology */}
      <div className="p8-section">
        <span className="p8-label">Methodology</span>
        <div className="p8-method-grid">

          {/* Row 1: Headers */}
          <div className="p8-method-header p8-method-header--col1">
            <span className="p8-method-number">1</span>
            <h3 className="p8-method-table-title">Hands-on Interviews</h3>
          </div>
          <div className="p8-method-header p8-method-header--col3">
            <span className="p8-method-number">2</span>
            <h3 className="p8-method-table-title">Quantitative Validation</h3>
          </div>

          {/* Rows 2–4: Label | Value | Label | Value */}
          <span className="p8-method-cell-label">Format</span>
          <span className="p8-method-cell-value p8-method-cell-value--col2"><span className="p8-highlight">Remote, 1:1 moderated sessions</span> where participants used C1 integrated Claude alongside their primary chatbot, testing multiple queries across intents.</span>
          <span className="p8-method-cell-label p8-method-cell-label--col3">Format</span>
          <span className="p8-method-cell-value"><span className="p8-highlight">Survey</span>: Multiple-choice questions about usage and preferences; <span className="p8-highlight">A/B test</span> of 2 chatbot responses: statics and generative.</span>

          <span className="p8-method-cell-label">Participant Count</span>
          <span className="p8-method-cell-value p8-method-cell-value--col2">30</span>
          <span className="p8-method-cell-label p8-method-cell-label--col3">Respondent Count</span>
          <span className="p8-method-cell-value">115</span>

          <span className="p8-method-cell-label p8-method-cell--row4">Avg. Duration</span>
          <span className="p8-method-cell-value p8-method-cell-value--col2 p8-method-cell--row4">30 minutes</span>
          <span className="p8-method-cell-label p8-method-cell-label--col3 p8-method-cell--row4">Avg. Time Spent</span>
          <span className="p8-method-cell-value p8-method-cell--row4">7 minutes</span>

          {/* Rows 5–6: Label (col 1) | Value (cols 2–4) */}
          <span className="p8-method-cell-label p8-method-cell--row5">Geographic Distribution</span>
          <span className="p8-method-cell-value p8-method-cell-value--span p8-method-cell--row5">USA, India, Canada, UAE, UK, Germany</span>

          <span className="p8-method-cell-label">Age Range</span>
          <span className="p8-method-cell-value p8-method-cell-value--span">18–55</span>

        </div>
      </div>

      {/* Outcome */}
      <div className="p8-section">
        <div className="p8-section-header">
          <span className="p8-label">Outcome</span>
          <h2 className="p8-section-title">Generative UI Report 2025</h2>
          <div className="p8-section-desc">
            <p>The findings were documented in a report as insights, quantitative data, user statements and the relevant instances from the moderated sessions.</p>
            <p>Readers could access this through a page in Thesys's marketing website, under "Resources", where the findings are summarised briefly.</p>
            <p>
              <a href="https://drive.google.com/file/d/1hMYkyhXNAHIjqKdUu8vxZW4RRwetlHbD/view?usp=drive_link" target="_blank" rel="noreferrer" className="p8-outcome-link p8-outcome-link--first">Find the full <i className="bi bi-file-earmark-text p8-outcome-link-icon"></i>report here</a>
              <br />
              <a href="https://www.thesys.dev/report/gen-ui-2025" target="_blank" rel="noreferrer" className="p8-outcome-link">Find the <i className="bi bi-globe2 p8-outcome-link-icon"></i>webpage summary here</a>
            </p>
          </div>
        </div>
        <div className="p8-outcome-video-wrap">
          <video ref={videoRef} className="p8-outcome-video" src={outcomeMov} autoPlay loop muted playsInline />
          <button className="p8-video-btn" onClick={togglePlay}>
            <i className={`bi ${isPlaying ? "bi-pause-fill" : "bi-play-fill"}`}></i>
          </button>
        </div>
      </div>

      {/* Impact */}
      <div className="p8-section">

        {/* Market-level */}
        <div className="p8-section-header p8-section-header--full">
          <span className="p8-label">Impact</span>
          <h2 className="p8-section-title">Market-level Impact</h2>
        </div>
        <div className="p8-impact-grid">
          <div className="p8-impact-card">
            <i className="bi bi-linkedin p8-impact-icon"></i>
            <p className="p8-impact-text">Findings were shared on LinkedIn and generated high engagement, increasing visibility for both the product and the team.</p>
          </div>
          <div className="p8-impact-card">
            <i className="bi bi-graph-up-arrow p8-impact-icon"></i>
            <p className="p8-impact-text">The study provided credible, data-backed insights that strengthened sales pitches and improved stakeholder confidence.</p>
          </div>
        </div>

        {/* Product-level */}
        <div className="p8-section-header p8-section-header--spaced">
          <h2 className="p8-section-title">Product-level Impact</h2>
          <div className="p8-impact-points">
            <div className="p8-impact-point">
              <h4 className="p8-impact-point-title">Product Direction</h4>
              <p className="p8-impact-point-body">Participants perceived most chatbots as interchangeable. The demo was updated to <span className="p8-highlight">introduce C1's Generative UI capability on the zero screen</span>, replacing the blank start with an explanation and click-to-start prompt cards.</p>
            </div>
            <div className="p8-impact-point">
              <h4 className="p8-impact-point-title">System Behavior</h4>
              <p className="p8-impact-point-body">The LLM's system prompt was updated with UX guidelines for response structure—when to generate <span className="p8-highlight">linear narratives vs. structured UI</span>, and when to use elements like progressive disclosure, images, tabs, or accordions.</p>
            </div>
            <div className="p8-impact-point">
              <h4 className="p8-impact-point-title">Interface Quality</h4>
              <p className="p8-impact-point-body">Participant feedback informed <span className="p8-highlight">additions to the component library and refinements</span> to several existing generated UI components.</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ProjectEight;
