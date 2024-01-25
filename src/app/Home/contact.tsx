import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Contact() {
  return (
    <div className="socials">
      <ul className="socials-list">

        <li className="socials-list-item">
          <a href="https://github.com">
            <FontAwesomeIcon className="socials-icon" icon={faGithub}  />
          </a>
        </li>
        <li className="socials-list-item">
          <a href="https://linkedin.com">
            <FontAwesomeIcon className="socials-icon" icon={faLinkedin}  />
          </a>
        </li>
        <li className="socials-list-item">
          <a href="https://twitter.com">
            <FontAwesomeIcon className="socials-icon" icon={faTwitter}  />
          </a>
        </li>
        <li className="socials-list-item">
          <a href="https://instagram.com">
            <FontAwesomeIcon className="socials-icon" icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
}
