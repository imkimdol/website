import './Website.css';
import Splash from "./Splash";
import Projects from "./projects/Projects";

export default function Website() {
  return (
    <div className='website'>
      <Splash />
      <Projects />
    </div>
  );
}