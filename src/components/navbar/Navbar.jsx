import "./navbar.css";
// import Notification from "../../img/notification.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMessage, faGear } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Auto App</span>
      <div className="icons">
      <div className="icon">
        <FontAwesomeIcon icon={faBell} className="iconImg" />
        {/* <img src={Notification} className="iconImg" alt="" /> */}
        <div className="counter">2</div>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faMessage} className="iconImg" />
        {/* <img src={Notification} className="iconImg" alt="" /> */}
        <div className="counter">2</div>
      </div>
      <div className="icon">
        <FontAwesomeIcon icon={faGear} className="iconImg" />
        {/* <img src={Notification} className="iconImg" alt="" /> */}
        <div className="counter">2</div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
