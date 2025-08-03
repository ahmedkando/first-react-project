import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface StarDividerProps {
  title:string;
  color?:string;
}

export default function StarDivider({ title, color='#2c3e50' }:StarDividerProps) {
  return (
    <div className="text-center py-4" style={{ color }}>
      <h2 className="display-5 fw-bold text-uppercase mb-3">{title}</h2>

      <div className="d-flex align-items-center justify-content-center mb-3 ">
        <div
          style={{
            backgroundColor: color,
            height: '4px', 
            width: '100px',
          }}
        />
        <FontAwesomeIcon icon={faStar} className="mx-3" style={{ color, fontSize: '1.5rem' }} />
        <div
          style={{
            backgroundColor: color,
            height: '4px', 
            width: '100px',
          }}
        />
      </div>
    </div>
  );
}
