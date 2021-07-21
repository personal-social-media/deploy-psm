import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithub} from '@fortawesome/free-brands-svg-icons';


export default function PageFooter() {
  return (
    <div className="text-white mx-auto">
      <div className="flex justify-evenly">
        <a href="https://github.com/personal-social-media/deploy-psm" target="_blank">
          <span className="pr-1">Source for client</span>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <div>
          License MIT
        </div>
        <a href="https://github.com/personal-social-media/deploy-psm" target="_blank">
          <span className="pr-1">Source for server</span>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}
