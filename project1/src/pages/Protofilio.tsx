import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import StarDivider from '../components/StarDivider';
import port1 from '../assets/images/port1.png';
import port2 from '../assets/images/port2.png';
import port3 from '../assets/images/port3.png';
import './Protofilio.css';

export default function Portfolio() {
  const [activeImage, setActiveImage]=useState<string | null>(null);
  const portfolioItems=[
    {
      id: 1,
      image: port1,
      alt: 'Log cabin',
    },
    {
      id: 2,
      image: port2, 
      alt: 'Cake slice',
    },
    {
      id: 3,
      image: port3, 
      alt: 'Circus tent',
    },
    {
      id: 4,
      image: port1, 
      alt: 'Log cabin',
    },
    {
      id: 5,
      image: port2, 
      alt: 'Cake slice',
    },
    {
      id: 6,
      image: port3, 
      alt: 'Circus tent',
    },
  ];

  return (
    <main className="pt-5 pb-5 bg-white min-vh-100">
      <div className="container text-center">
        <StarDivider title="Portfolio" />
        <div className="row g-4">
          {portfolioItems.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              <div
                className="position-relative overflow-hidden rounded shadow-sm"
                onClick={() => setActiveImage(item.image)}
                style={{ cursor: 'pointer' }}
              >
                <img src={item.image} alt={item.alt} className="img-fluid rounded" />
                <div className="overlay d-flex justify-content-center align-items-center position-absolute top-0 start-0 w-100 h-100 bg-success bg-opacity-75 text-white opacity-0 hover-opacity">
                  <FontAwesomeIcon icon={faPlus} size="2x" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeImage&&(<div className="zoom-overlay"onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="Zoomed" className="zoomed-img" />
        </div>
      )}
    </main>
  );
}

