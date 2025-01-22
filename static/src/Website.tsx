import './Website.css';
import Splash from "./Splash";
import Projects from './projects/Projects';
import Footer from './Footer';

export default function Website() {
  return (
    <div className='website'>
      <Splash />
      <Projects />
      <Footer />
    </div>
  );
}