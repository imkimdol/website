import './Projects.css';
import { useState } from 'react';
import { ProjectCategory, selectedCategoryReadOnlyProps, selectedCategoryWriteProps } from './types';
import SoftwareInfo from './SoftwareInfo';
import GameDevInfo from './GameDevInfo';
import MusicInfo from './MusicInfo';

export default function Projects() {  
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(ProjectCategory.Software);

  return (
    <section className={`projects ${ProjectCategory[selectedCategory]}`}>
      <h2>Projects</h2>
      <div className="projectsContent">
        <Selector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <SelectedInfo selectedCategory={selectedCategory} />
      </div>
    </section>
  );
}

function Selector({ selectedCategory, setSelectedCategory }: selectedCategoryWriteProps) {
  return (
    <div className="selector">
      <p className="software" onClick={() => setSelectedCategory(ProjectCategory.Software)}>
        Software Development
      </p>
      <p className="gameDev" onClick={() => setSelectedCategory(ProjectCategory.GameDev)}>
        Game Development
      </p>
      <p className="music" onClick={() => setSelectedCategory(ProjectCategory.Music)}>
        Music Production
      </p>
    </div>
  )
}

function SelectedInfo({ selectedCategory }: selectedCategoryReadOnlyProps) {
  if (selectedCategory === ProjectCategory.Software) return <SoftwareInfo />
  else if (selectedCategory === ProjectCategory.GameDev) return <GameDevInfo />
  else return <MusicInfo />
}