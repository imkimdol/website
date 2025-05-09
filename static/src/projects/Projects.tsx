import './Projects.css';
import SoftwareInfo from './SoftwareInfo';
import GameDevInfo from './GameDevInfo';
import MusicInfo from './MusicInfo';
import Contact from './Contact';

export default function Projects() {  
  return (
    <section className="projects">
      <SoftwareInfo />
      <GameDevInfo />
      <div className="musicContact">
        <MusicInfo />
        <Contact />
      </div>
    </section>
  );
}