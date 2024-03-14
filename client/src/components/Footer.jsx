import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareXTwitter, faInstagram, faGithub, faLinkedin, faSnapchat } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer className="footer">
      <div>
        <div id='company'>
          <h3>Company</h3>
          <Link to='#'>About</Link>
          <Link to='#'>Careers</Link>
          <Link to='#'>Terms</Link>
          <Link to='#'>Privacy</Link>
        </div>
        <div id='support'>
          <h3>Support</h3>
          <Link to='#'>FAQs</Link>
          <Link to='#'>Trust and Safety</Link>
          <Link to='#'>Cookie preferences</Link>
          <Link to='#'>Report a safety issue</Link>
        </div>
        <div id='contact'>
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faSquareXTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faSnapchat} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

