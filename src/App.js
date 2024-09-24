import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header>
        {/* <div id="root"></div> */}
        <div className="header-content">
          <div className="name-title">
            <h1><strong>Zh Ritmel</strong></h1>
            <p>Data Scientist</p>
          </div>
          <div className="contact-info">
            <p>Email: abc@gmail.com</p>
            <p>Web: <a href="https://abc.github.io/abc">abc.github.io/abc</a></p>
            <p>Mobile: 01234567890</p>
          </div>
        </div>
      </header>
      <hr className="After_Header" />
      <main>
        <section className="profile">
          <h2><i>Personal Profile</i></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>
        <hr className="After_Profile" />
        <section className="experience">
          <h2><i>Work Experience</i></h2>
          <ul className="joblist">
            <div className="job1">
              <h3>Job Title at Company (August 2022 – December 2023)</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.</p>
            </div>

            <div className="job2">
              <h3>Job Title 2 at Company 2 (August 2020 – December 2021)</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </ul>
        </section>

        <hr className="After_Experience" />

        <section className="skills">
          <h2><i>Key Skills</i></h2>
          <ul className="TopLists">
            <ul className="Lists1">
              <li>A Key skill</li>
              <li>A Key skill</li>
              <li>A Key skill</li>
            </ul>
            <ul className="Lists2">
              <li>A Key skill</li>
              <li>A Key skill</li>
              <li>A Key skill</li>
            </ul>
            <ul className="Lists3">
              <li>A Key skill</li>
              <li>A Key skill</li>
              <li>A Key skill</li>
            </ul>
          </ul>
        </section>

        <hr className="After_Skills" />

        <section className="education">
          <h2><i>Education</i></h2>
          <ul className="BachelorsAndMasters">
            <ul className="Bachelors">
              <li><strong>New Jersey Institute of Technology</strong></li>
              <li>BS in Computer Science</li>
              <li>2018 - 2022</li>
              <li>GPA: 3.9</li>
            </ul>
            <ul className="Masters">
              <li><strong>New Jersey Institute of Technology</strong></li>
              <li>MS in Data Science</li>
              <li>2022 - 2023</li>
              <li>GPA: 4.0</li>
            </ul>
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;
