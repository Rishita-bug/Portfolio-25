import react from "react";
import './ProjectThree-prism.css'

const CDN_P = 'https://ik.imagekit.io/pfolio25/pfolio_project_assets/prism_assets';
const TR_P = '?tr=f-auto,q-80';
const images = {
  'accountability':                `${CDN_P}/accountability.webp${TR_P}`,
  'context':                       `${CDN_P}/context.webp${TR_P}`,
  'customizable':                  `${CDN_P}/customizable.webp${TR_P}`,
  'delight':                       `${CDN_P}/delight.webp${TR_P}`,
  'digital-wellbeing-bg':          `${CDN_P}/digital-wellbeing-bg.webp${TR_P}`,
  'exp-user-minimal-wallpaper':    `${CDN_P}/exp-user-minimal-wallpaper.png${TR_P}`,
  'exp-user-widgets-unnoticed':    `${CDN_P}/exp-user-widgets-unnoticed.png${TR_P}`,
  'insights-1.1':                  `${CDN_P}/insights-1.1.webp${TR_P}`,
  'insights-1.2':                  `${CDN_P}/insights-1.2.webp${TR_P}`,
  'insights-1.3':                  `${CDN_P}/insights-1.3.webp${TR_P}`,
  'insights-1.4':                  `${CDN_P}/insights-1.4.webp${TR_P}`,
  'insights-1.5':                  `${CDN_P}/insights-1.5.webp${TR_P}`,
  'insights-2.1':                  `${CDN_P}/insights-2.1.webp${TR_P}`,
  'insights-2.2':                  `${CDN_P}/insights-2.2.webp${TR_P}`,
  'insights-2.3':                  `${CDN_P}/insights-2.3.webp${TR_P}`,
  'insights-2.4':                  `${CDN_P}/insights-2.4.webp${TR_P}`,
  'insights-2.5':                  `${CDN_P}/insights-2.5.webp${TR_P}`,
  'new-user-space-frustration':    `${CDN_P}/new-user-space-frustration.png${TR_P}`,
  'new-user-time-efficiency':      `${CDN_P}/new-user-time-efficiency.png${TR_P}`,
  'new-user-trial-error':          `${CDN_P}/new-user-trial-error.png${TR_P}`,
  'new-user-wallpaper-placement':  `${CDN_P}/new-user-wallpaper-placement.png${TR_P}`,
  'perceptible':                   `${CDN_P}/perceptible.webp${TR_P}`,
  'space-efficiency':              `${CDN_P}/space-efficiency.webp${TR_P}`,
  'timers':                        `${CDN_P}/timers.webp${TR_P}`,
  'visual-data':                   `${CDN_P}/visual-data.webp${TR_P}`,
}

const ProjectThree = () => {
  return (
    <div className="p3-container">

      <div className="methodology-section">
        <h2>Methodology</h2>
        <div className="process-grid">
          
          <div className = "process-subsection">
            <h3>Secondary Research</h3>
            <ul>
              <li>Pleasantness and Delight in UX Design</li>
              <li>Motion as a problem-solving tool in UX</li>
            </ul>
          </div>

          <div className = "process-subsection">
            <h3>Primary Research-1</h3>
            <ul>
              <li><span>Method:</span> Interviews</li>
              <li><span>Objective:</span> Identifying opportunity areas for motion design intervention.</li>
            </ul>
          </div>

          <div className = "process-subsection">
            <h3>Identifying Opportunities</h3>
            <ul>
              <li>Widgets</li>
              <li>Digital Mindfulness</li>
              <li>Calling</li>
            </ul>
          </div>

          <div className = "process-subsection">
            <h3>Primary Research-2: Studying Widgets</h3>
            <ul>
              <li><span>Secondary Research:</span> Existing widgets on homescreens of different smartphones.</li>
              <li><span>Primary Resesearch:</span> Inverviews, Retrospective Study and Survey</li>
            </ul>
          </div>

          <div className = "process-subsection">
            <h3>Rephrasing the Brief</h3>
            <ul>
              <li><span>Diverging:</span> Ideating for redesigning existing widget interactions and new Samsung app widgets</li>
              <li><span>Converging:</span> Screen-time widgets</li>
            </ul>
          </div>

          <div className = "process-subsection">
            <h3>Ideation</h3>
            <p><span>Method:</span> Design matrix combining parameters and features.</p>
          </div>

          <div className = "process-subsection">
            <h3>Rapid Prototyping</h3>
            <p>Sketches, storyboards, rough animations</p>
          </div>

          <div className = "process-subsection">
            <h3>Animating</h3>
            <p>Final motion graphics, storyboards with UI elements on screens.</p>
          </div>

        </div>
      </div>


      <div className="primary-research-1-section">
        <div className="section-header">
          <h2>Interviews and Retrospective Study</h2>
          <p className="section-description">An inquiry into why, despite being seemingly accessible and time-saving, widgets are not popular among Android users.</p>
        </div>

        <div className="primary-research-1-subsection">
          <div className="categories-container">

            <div className="category-section new-users-grid">
              <div className="category-header">
                <h3>New Users</h3>
                <p className="category-description">Participants were asked to use widgets for 1 week and their experiences were recorded via interviews.</p>
              </div>
              <div className="insight-card">
                <img className="insight-card-img" src={images['new-user-time-efficiency']} alt="Quicker info access insight"/>
                <h4>Quicker Info Access</h4>
                <p>Widgets feel faster than opening the app. They are mostly used for apps that aren't opened very often.</p>
              </div>
              <div className="insight-card">
                <img className="insight-card-img" src={images['new-user-trial-error']} alt="Trial and error in widget choice insight"/>
                <h4>Trial & Error in Widget Choice</h4>
                <p>Choosing the right widget involves experimentation. Users don't always analyze their own usage patterns.</p>
              </div>
              <div className="insight-card">
                <img className="insight-card-img" src={images['new-user-space-frustration']} alt="Space efficiency insight"/>
                <h4>Space Efficiency</h4>
                <p>Widgets take up too much space on one screen. If not on the main screen, they are often ignored.</p>
              </div>
              <div className="insight-card">
                <img className="insight-card-img" src={images['new-user-wallpaper-placement']} alt="Wallpaper-aware placement insight"/>
                <h4>Wallpaper-Aware Placement</h4>
                <p>Users get used to widgets covering the wallpaper. They place them carefully to match the wallpaper layout.</p>
              </div>
            </div>

            <div className="category-section experienced-users-grid">
              <div className="category-header">
                <h3>Experienced Users</h3>
                <p className="category-description">Participants who had been using widgets already.</p>
              </div>
              <div className="insight-card">
                <img className="insight-card-img" src={images['exp-user-minimal-wallpaper']} alt="Minimal wallpaper insight"/>
                <h4>Insight Title</h4>
                <p>Users have wallpapers with a minimal design or the same homescreen and lockscreen wallpapers.</p>
              </div>
              <div className="insight-card">
                <img className="insight-card-img" src={images['exp-user-widgets-unnoticed']} alt="Widgets unnoticed insight"/>
                <h4>Insight Title</h4>
                <p>Widgets often go unnoticed by users despite being on the homescreen.</p>
              </div>
            </div>

          </div>
        </div>
        <div className="primary-research-1-subsection">
            <div className="survey-insights-grid">
              {/* Row 1: Survey info + Highlight stat */}
              <div className="survey-meta">
                <h3>Survey</h3>
                <div className="survey-meta-row">
                  <span className="survey-meta-label">Responses</span>
                  <span className="survey-meta-value">51</span>
                </div>
                <div className="survey-meta-row">
                  <span className="survey-meta-label">Age Range</span>
                  <span className="survey-meta-value">16-55*</span>
                </div>
              </div>

              <div className="survey-insight-card highlight-stat-card">
                <div className="highlight-card-label">
                  <i className="bi bi-people-fill"></i>
                  Widget Adoption
                </div>
                <div className="highlight-stat-content">
                  <span className="highlight-number">58.8%</span>
                  <p className="highlight-sentence">
                    of users are hesitant to use more than a few widgets.<br/><span className="highlight-percent">62.2%</span> cite <span className="highlight-word highlight-reason">home-screen clutter</span> and <span className="highlight-percent">40%</span> cite <span className="highlight-word highlight-reason">limited perceived need</span>.
                  </p>
                </div>
              </div>

              {/* Row 2: Three bar chart insights */}
              <div className="survey-insight-card insight-1">
                <h4>What makes users <span className="highlight-word">choose</span> a widget?</h4>
                <div className="bar-chart-group">
                  <div className="bar-chart-row">
                    <div className="bar-label-group">
                      <span className="bar-value">86%</span>
                      <span className="bar-label">Frequent Use</span>
                    </div>
                    <div className="bar-container">
                      <div className="bar-fill" style={{ width: '86%' }}></div>
                    </div>
                  </div>
                  <div className="bar-chart-row">
                    <div className="bar-label-group">
                      <span className="bar-value">41%</span>
                      <span className="bar-label">Visual Appeal</span>
                    </div>
                    <div className="bar-container">
                      <div className="bar-fill" style={{ width: '41%' }}></div>
                    </div>
                  </div>
                  <div className="bar-chart-row">
                    <div className="bar-label-group">
                      <span className="bar-value">33%</span>
                      <span className="bar-label">Quick Actions</span>
                    </div>
                    <div className="bar-container">
                      <div className="bar-fill" style={{ width: '33%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="survey-insight-card insight-2">
                <h4>Why do users <span className="highlight-word">discard</span> widgets?</h4>
                <div className="bar-chart-group">
                  <div className="bar-chart-row">
                    <div className="bar-label-group">
                      <span className="bar-value">80%</span>
                      <span className="bar-label">Lack of usage</span>
                    </div>
                    <div className="bar-container">
                      <div className="bar-fill" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  <div className="bar-chart-row">
                    <div className="bar-label-group">
                      <span className="bar-value">51%</span>
                      <span className="bar-label">Space occupied</span>
                    </div>
                    <div className="bar-container">
                      <div className="bar-fill" style={{ width: '51%' }}></div>
                    </div>
                  </div>
                  <div className="bar-chart-row">
                    <div className="bar-label-group">
                      <span className="bar-value">35%</span>
                      <span className="bar-label">Not enough info</span>
                    </div>
                    <div className="bar-container">
                      <div className="bar-fill" style={{ width: '35%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="survey-insight-card insight-3">
                <h4>What do users <span className="highlight-word">expect</span> from widgets?</h4>
                <div className="bar-chart-group">
                  <div className="bar-chart-row">
                    <div className="bar-label-group">
                      <span className="bar-value">67%</span>
                      <span className="bar-label">Task-efficiency</span>
                    </div>
                    <div className="bar-container">
                      <div className="bar-fill" style={{ width: '67%' }}></div>
                    </div>
                  </div>
                  <div className="bar-chart-row">
                    <div className="bar-label-group">
                      <span className="bar-value">45%</span>
                      <span className="bar-label">Delight</span>
                    </div>
                    <div className="bar-container">
                      <div className="bar-fill" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div className="bar-chart-row">
                    <div className="bar-label-group">
                      <span className="bar-value">39%</span>
                      <span className="bar-label">Visual appeal</span>
                    </div>
                    <div className="bar-container">
                      <div className="bar-fill" style={{ width: '39%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>


      <div className="converging-section">
        <div className="section-header">
          <h2>Why Digital Wellbeing?</h2>
          <p className="section-description">In the post-COVID era, with the permeation of technology use in various aspects of users’ day-to-day, digital mindfulness emerges as a need of the hour. Screentime is one sphere of digital mindfulness that concerns users today.</p>
        </div>
      </div>


      <div className="primary-research-2-section">
        <h2>Insights from User Interviews</h2>
        <div className="primary-research-2-info">
          <div className="survey-meta-row">
            <span className="survey-meta-label">Interviewees</span>
            <span className="survey-meta-value">9</span>
          </div>
          <div className="survey-meta-row">
            <span className="survey-meta-label">Age Range</span>
            <span className="survey-meta-value">17-53 years</span>
          </div>
          <div className="survey-meta-row">
            <span className="survey-meta-label">Note</span>
            <span className="survey-meta-value">All interviewees were Android users, 6 of whom were Samsung smartphone users.</span>
          </div>
        </div>
        <div className="primary-research-2-insights">
          <div className="insight-row">
            <div className="insight-img-container">
              <img src={images['insights-2.1']} alt="Self-regulating screentime"/>
            </div>
            <div className="insight-text">
              <h4>Self-Regulating Screentime</h4>
              <p>Users actively manage their screen time, using Digital Wellbeing features and third-party apps for support.</p>
            </div>
          </div>

          <div className="insight-row">
            <div className="insight-img-container">
              <img src={images['insights-2.2']} alt="Parental concerns with Gen Alpha"/>
            </div>
            <div className="insight-text">
              <h4>Parental Concerns With Gen Alpha</h4>
              <p>Gen Alpha parents report heightened concern about their children's screen time since COVID.</p>
            </div>
          </div>

          <div className="insight-row">
            <div className="insight-img-container">
              <img src={images['insights-2.3']} alt="Negative feelings cause drop-off"/>
            </div>
            <div className="insight-text">
              <h4>Negative Feelings Cause Drop-Off</h4>
              <p>Screentime widgets are often discarded after use as they cause feelings of anxiety and guilt.</p>
            </div>
          </div>

          <div className="insight-row">
            <div className="insight-img-container">
              <img src={images['insights-2.4']} alt="Smartphones perceived as detrimental"/>
            </div>
            <div className="insight-text">
              <h4>Smartphones Perceived As Detrimental</h4>
              <p>The perception of phones as detrimental to productivity and well-being is reinforced.</p>
            </div>
          </div>

          <div className="insight-row">
            <div className="insight-img-container">
              <img src={images['insights-2.5']} alt="Awareness without interpretation"/>
            </div>
            <div className="insight-text">
              <h4>Awareness Without Interpretation</h4>
              <p>Screen time data causes brief anxiety but rarely leads to action, and users become desensitized over time.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="ideation-section">
        <div className="section-header">
          <h2>Ideation</h2>
          <p className="ideation-description section-description">The following parameters intersected with features were considered while ideating for the solution.</p>
        </div>
        <div className = "ideation-section-grid">

          <div className = "ideation-subsection">
            <figure>
              <img src = {images['context']}/>
              <figcaption>Context</figcaption>
            </figure>
            <figure>
              <img src = {images['space-efficiency']}/>
              <figcaption>Space Efficiency</figcaption>
            </figure>
            <figure>
              <img src = {images['delight']}/>
              <figcaption>Delight</figcaption>
            </figure>
            <figure>
              <img src = {images['accountability']}/>
              <figcaption>Accountability</figcaption>
            </figure>
          </div>
          <h3 className = "h3-for-mobile">Parameters</h3>

          <div className = "ideation-subsection ideation-subsection-2">
            <figure>
              <img src = {images['timers']}/>
              <figcaption>Timers/Goals</figcaption>
            </figure>
            <figure>
              <img src = {images['visual-data']}/>
              <figcaption>Visual Data</figcaption>
            </figure>
            <figure>
              <img src = {images['perceptible']}/>
              <figcaption className="change-in-data">Perceptible</figcaption>
            </figure>
            <figure>
              <img src = {images['customizable']}/>
              <figcaption>Customizable</figcaption>
            </figure>
          </div>
          <h3 className = "h3-for-mobile">Features</h3>

          <h3 className="h3-for-desktop">Parameters</h3>
          <h3 className="h3-for-desktop">Features</h3>
          
        </div>
        
      </div>

      <div className = "credits-container">
        <h3>Credits</h3>
        <div className = "credits-content">
          <div>
            <h4 className = "credits-h1">Research & Synthesis</h4>
            <p className = "credits-p1">Vaidehi Shirsath, Ritika Varma, Rishita Baghel</p>
          </div>
          <div>
            <h4 className = "credits-h2">Rough prototypes</h4>
            <p className = "credits-p2">Rishita Baghel</p>
          </div>
          <div>
            <h4 className = "credits-h3">Final prototypes</h4>
            <p className = "credits-p3">Vaidehi Shirsath, Ritika Verma, Sahil Betigeri, Shabeer S, Arjun Sanu, Rishita Baghel </p>
          </div>
          <div>
          <h4 className = "credits-h4">Documentation</h4>
          <p className = "credits-p4">Rishita Baghel</p>
          </div> 
          </div>
      </div>
    </div>
  )
}

export default ProjectThree;