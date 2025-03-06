import react from "react";
import './ProjectThree-prism.css'

const images = Object.fromEntries(
  Object.entries(import.meta.glob("./assets/Prism-assets/*.{png,webp,gif}", {eager: true}))
  .map(([path, module]) => {
    const fileName = path.split("/").pop().replace(/\.(png|webp|gif)$/, "");
    return [fileName, module.default]
  })
)

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
        <h2>Studying Widgets: Primary Research-2 Insights</h2>
        <p className = "section-description">An inquiry into why, despite being seemingly accessible and time-saving, widgets are not popular among Android users.</p>

        <div className="primary-research-1-subsection">
          <h3>Interviews and Restrospective Study</h3>
          <div className = "retrospective-study-info-container">
            <h5>Interviewees</h5>
            <ul>
              <li>A: Experienced widget users</li>
              <li>B: Inexperienced widget users who were asked to use widgets for a week.</li>
            </ul>
          </div>
         
          <div className = "categories-container">
            <div className = "category-a-container">
              <h4>Category A</h4>
              <div className = "category-a-grid">
                <p>Users felt that using widgets is more time-efficient than finding and launching the respective app. Most common widgets used belong to apps that are not used too much and too frequently.</p>
                <p>Widgets not being space-efficient  within a single homescreen causes frustration. Widgets go unnoticed when they aren’t on the primary homescreen, since apps are often accessed from the app drawer.</p>
                <p>Users get used to seeing widgets on their screen, despite it covering their wallpaper. They strategically place these widgets according to the visuals of the wallpaper.</p>
                <p>Figuring out which widget to use can often involve trial and error since users don’t often scrutinise their own activity.</p>
              </div>
              
            </div>
            <div className = "category-b-container">
              <h4>Category B</h4>
              <div className = "category-b-grid">
                <p>Users have wallpapers with a minimal design or the same homescreen and lockscreen wallpapers.</p>
                <p>Widgets often go unnoticed by users despite being on the homescreen.</p>
              </div>
              
            </div>
          </div>

        </div>
        <div className="primary-research-1-subsection">
          <h3>Survey</h3>
            <ul>
              <li>No. of Responses: 51</li>
              <li>Age Rage: 16-55*</li>
            </ul>

            <div className = "survey-insights-grid">
              <div className = "survey-insight">
                <img src={images['insights-1.1']}/>
                <p>Users consider aesthetics followed by convenience and frequency of usage while choosing widgets.</p>
              </div>
              <div className = "survey-insight">
                <img src={images['insights-1.2']}/>
                <p>It is desirable to be able to customize the limited information shown in widgets.</p>
              </div>
              <div className = "survey-insight">
                <img src={images['insights-1.3']}/>
                <p>Though not at the forefront, being fun is a desireable quality in a widget.</p>
              </div>
              <div className = "survey-insight">
                <img src={images['insights-1.4']}/>
                <p>After lack of usage, the next driving factor for discarding widgets is the space occupied.</p>
              </div>
              <div className = "survey-insight">
                <img src={images['insights-1.5']}/>
                <p>People use widgets minimally, mostly system widgets.</p>
              </div>
            </div>
            
        </div>
      </div>


      <div className="converging-section">
        <h2>Why Digital Wellbeing?</h2>
        <p className = "section-description">In the post-COVID era, with the permeation of technology use in various aspects of users’ day-to-day, digital mindfulness emerges as a need of the hour. Screentime is one sphere of digital mindfulness that concerns users today.</p>
      </div>


      <div className="primary-research-2-section">
        <h2>Insights from User Interviews</h2>
        <div className = "primary-research-2-info">
          <div>
            <h5>No. of Interviewees:</h5>
            <h5>Age Range:</h5>
            <h5>Note:</h5>
          </div>
          <div>
            <p>9</p>
            <p>17-53 years</p>
            <ul>
              <li>All Interviewees were android users.</li>
              <li>6/9 interviewees were Samsung smartphone users.</li>
            </ul>
          </div>
          
        </div>
        <div className = "primary-research-2-insights">
          <figure>
            <img src = {images['insights-2.1']}/>
            <figcaption>
              Users are proactive about managing their screentime. They often take assistance of Digital Wellbeing features and  third-party apps to attempt to manage their screentime.
            </figcaption>
          </figure>
          <figure>
            <img src = {images['insights-2.2']}/>
            <figcaption>
              Parents of Gen Alpha express concern about their children’s screentime, especially since COVID times. 
            </figcaption>
          </figure>
          <figure>
            <img src = {images['insights-2.3']}/>
            <figcaption>
              Users who make the effort of putting screentime widgets on their screen, often discard them as it causes feelings of anxiety and guilt.
            </figcaption>
          </figure>
          <figure>
            <img src = {images['insights-2.4']}/>
            <figcaption>
            Feelings of guilt and anxiety arise when users find themselves doomscrolling on different applications. This makes them view their phones as an evil against productivity and health.
            </figcaption>
          </figure>
          <figure>
            <img src = {images['insights-2.5']}/>
            <figcaption>
            Checking one’s screentime does not inspire a call-to-action. Users often experience initial anxiety at the quantitative data and then get desensitized to it.
            </figcaption>
          </figure>          
        </div>
      </div>


      <div className="ideation-section">
        <h2>Ideation</h2>
        <p className="ideation-description section-description">The following parameters intersected with features were considered while ideating for the solution.</p>
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



    </div>
  )
}

export default ProjectThree;