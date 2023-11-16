import React from "react";
import "./style.css";


const Home = () => {

  return (
    <div>
      <main>
        <section className="banner-container">
          <div className="container">
            <div className="left-section">
              <h1>Welcome to Intenship Portal</h1>
              <p>
                As a college student, you might wonder what kind of computer
                science internships are available to you. Whether full time or
                part time, these work experiences provide a lot of real-world
                practice that can help you better understand your career field
                and provide qualifications for your resume.
              </p>

              <button> Login</button>
            </div>
            <div className="right-section">
              <h4>Please fill the form</h4>
              <form action="" autocomplete="off">
                <div className="input-group">
                  <input type="text" id="name" required />
                  <label for="name">Name</label>
                </div>
                <div className="input-group">
                  <input type="text" id="email" required />
                  <label for="email">Email</label>
                </div>
                <div className="input-group">
                  <input type="text" id="password" required />
                  <label for="password">Password</label>
                </div>
                <div className="submit-section">
                  <input
                    type="submit"
                    value="Submit"
                    className="submit-button"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
<div className="card">
  




    </div>
        <footer>
          Design and Developed by <span>Aswin Chandran</span>
        </footer>

        <div id="root"></div>
      </main>
    </div>
  );
};

export default Home;
