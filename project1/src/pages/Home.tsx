import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
export default function Home() {
  return (
    <main className="pt-5">
      <section
        className="d-flex align-items-center justify-content-center text-white"
        style={{ backgroundColor: '#1abc9c', minHeight: '100vh' }}>
        <div className="text-center">
          <div className="mb-4">
            <img
              src="../assets/images/avataaars.png"
              alt="Avatar"
              className="rounded-circle mb-4"
              style={{ width: '16rem', height: '16rem' }}
            />
          </div>
          <div className="mb-4">
            <h1 className="display-4 fw-bold text-uppercase mb-4">Start Framework</h1>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="border-top border-2 border-white w-25"></div>
              <FontAwesomeIcon icon={faStar} className="mx-3 text-white fs-3" />
              <div className="border-top border-2 border-white w-25"></div>
            </div>
          </div>
          <p className="fs-5">Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </section>
    </main>
  )
}
