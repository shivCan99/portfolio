import "./about.css";
import Certificate from "../../img/Coursera.jpg";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a graduate student at Humber College. My major is Software Engineering. 

        </p>
        <p className="a-desc">
        I pursued Bachelor of Engineering degree from Vadodara Institute of Technology with major of Computer Science. 
            I also worked as Intern. IT Security Intern at Verzeo PVT LTD.
        </p>
        <p className="a-desc">
        I have a keen interest in mobile as well as web developement. 
        I will graduate in Aug, 2023. Therefore, I am looking for an entry level software developer position.
        </p>
        <div className="a-award">
          <img src={Certificate} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Google Data Analytics Professional</h4>
            <p className="a-award-desc">
            This certification offers the ideal balance of case studies and real-world examples to develop, enhance, and refresh data analysis skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
