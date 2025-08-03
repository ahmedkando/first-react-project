import StarDivider from '../components/StarDivider';
import "./About.css"
export default function About() {
  return (
    <main className="pt-5 pb-4 min-vh-100 "style={{ backgroundColor:'#1abc9c'}}>
      <div className="container centering">
        <StarDivider title="ABOUT" />
         <div className="row justify-content-center text-start mt-4">
          <div className="col-md-5">
            <p className='coloring'>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-5">
            <p className='coloring'>
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
