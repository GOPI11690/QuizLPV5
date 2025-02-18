import facebook1 from "./assets/images/facebook1.png";
import instagram1 from "./assets/images/instagram1.png";
import youtube1 from "./assets/images/youtube1.png";

//footer Component
function Footer() {
  return (
    <div className="fBody">
      <div className="footer">
        <div className="companyText">
          <h3>Gobs Quiz</h3>
          <br />
          <ul>
            <li>About</li>
            <li>Privacy Policy</li>
            <li>Terms and Service</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <h5>© All Rights Reserved 2025. Gobs Quiz Ltd.</h5>

        {/* links for social media  */}
        <div className="icons">
          <a href="https://www.facebook.com/">
            <img id="icons" src={facebook1} />
          </a>
          <a href="https://www.instagram.com/?hl=en">
            <img id="icons" src={instagram1} />
          </a>
          <a href="https://www.youtube.com/">
            <img id="icons" src={youtube1} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
