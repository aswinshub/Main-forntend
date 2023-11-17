import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div>
      <main>
        <section className="banner-container">
          <div className="container">
            <div className="left-section">
              <h1>Welcome to Internship Portal</h1>
              <p>
                As a college student, you might wonder what kind of computer
                science internships are available to you. Whether full time or
                part time, these work experiences provide a lot of real-world
                practice that can help you better understand your career field
                and provide qualifications for your resume.
              </p>

              <button> Login</button>
            </div>
          </div>
        </section>
        <h2>Intership Courses</h2>
        <div className="card">
          <div className="cardone">
            <img
              src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg"
              alt=""
            />
            <br />
            <h4>
              Intenship in Artifical Inteligence and Machine Learning
            </h4>
          </div>
          <div className="cardtwo">
           
            <img
              src="https://media.licdn.com/dms/image/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=y46kqfqImgi-IbshBGRs3lMz1HCTBvL8RjFAILShitg"
              alt=""
            />
            <br />
            <h4>Intenship in Cyber Security</h4>
          </div>
          <div className="cardthree">
          <img
              src="https://media.licdn.com/dms/image/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=y46kqfqImgi-IbshBGRs3lMz1HCTBvL8RjFAILShitg"
              alt=""
            />
            <br /><h4>Intenship in Data science</h4>
          </div>
        </div>
        <div className="card">
          <div className="cardone">
          <img
              src="https://media.licdn.com/dms/image/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=y46kqfqImgi-IbshBGRs3lMz1HCTBvL8RjFAILShitg"
              alt=""
            />
            <br /> <h4>Intenship in Full Stack Development (MERN)</h4>
          </div>
          <div className="cardtwo">
          <img
              src="https://media.licdn.com/dms/image/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=y46kqfqImgi-IbshBGRs3lMz1HCTBvL8RjFAILShitg"
              alt=""
            />
            <br /><h4>Intenship in Artifical Inteligence and Machine Learning</h4>
          </div>
          <div className="cardthree">
          <img
              src="https://media.licdn.com/dms/image/D5612AQE0r5WC8r0HQg/article-cover_image-shrink_720_1280/0/1657711469335?e=2147483647&v=beta&t=y46kqfqImgi-IbshBGRs3lMz1HCTBvL8RjFAILShitg"
              alt=""
            />
            <br /> <h4>Intenship in Artifical Inteligence and Machine Learning</h4>
          </div>
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
