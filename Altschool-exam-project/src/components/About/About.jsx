import "./about.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <div className="about">
        <div className="header">
          <h1>About This Project</h1>
        </div>
        <div className="text">
          <p>
            This is AltSchool third semester exam whereby we were told to pick
            one project out of four projects in which we have to create a React
            app and follow the descriptions of any of the project we picked.
          </p>
          <h2>Description of project 2:</h2>
          <div className="desc-text">
            <p>
              Setup a custom counter hook with increment, decrement, reset,
              setValue functions with a valid UI and Implement a combination of
              states with a useReducer that implements a counter with the four
              evident features in the custom hook - increment, decrement, reset,
              setValue. Implement a page for the custom hook, useReducer, 404,
              and a page to test error boundary and good SEO.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
