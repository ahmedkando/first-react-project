import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Location</h5>
            <p className="mb-1">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">Around The Web</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="btn btn-outline-light rounded-circle">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="#" className="btn btn-outline-light rounded-circle">
                <FontAwesomeIcon icon={faGlobe} />
              </a>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase fw-bold mb-3">About Freelancer</h5>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by Route.
            </p>
          </div>
        </div>
        <div className="text-center border-top pt-3">
          <p className="mb-0 small">Copyright © Your Website 2021</p>
        </div>
      </div>
    </footer>
  );
}
