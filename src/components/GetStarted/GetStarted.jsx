import "./GetStarted.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const GetStarted = () => {
  return (
    <section className="get-started container text-center">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faPaperclip} />
      </div>
      <h3 className="mb-2">Get Started</h3>
      <p>
        Turn information into advantage! Start using <br />
        Ramos today. Sign up for a free trial
      </p>
      <div className="button-group">
        <button className="ashBtn">Request a Demo</button>
        <button className="redBtn">Start for free</button>
      </div>
    </section>
  );
};

export default GetStarted;
