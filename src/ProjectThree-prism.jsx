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
        <p>An inquiry into why, despite being seemingly accessible and time-saving, widgets are not popular among Android users.</p>

        <div className="primary-research-1-subsection">
          <h3>Interviews and Restrospective Study</h3>
          <div className = "retrospective-study-info-container">
            <h4>Interviewees</h4>
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
        <p>In the post-COVID era, with the permeation of technology use in various aspects of users’ day-to-day, digital mindfulness emerges as a need of the hour. Screentime is one sphere of digital mindfulness that concerns users today.</p>
      </div>


      <div className="primary-research-2-section">
        <h2>Insights from User Interviews</h2>
        <div className = "primary-research-2-info">
          {/*NO. OF INTERVIEWEES ETC*/}
        </div>
        <div className = "primary-research-2-insights">
          <figure></figure>
          <figure></figure>
          <figure></figure>
          <figure></figure>
          <figure></figure>          
        </div>
      </div>


      <div className="ideation-section">
        <h2>Ideation</h2>
        <p>The following parameters intersected with features were considered while ideating for the solution.</p>
        <div className = "ideation-subsection"></div>
        <div className = "ideation-subsection"></div>
      </div>



    </div>
  )
}

export default ProjectThree;