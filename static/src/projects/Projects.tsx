import './Projects.css';
import SoftwareInfo from './SoftwareInfo';
import GameDevInfo from './GameDevInfo';
import MusicInfo from './MusicInfo';

export default function Projects() {  
  return (
    <section className="projects">
      <SoftwareInfo />
      <GameDevInfo />
      <MusicInfo />
    </section>
  );
}