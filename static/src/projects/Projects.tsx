import { useState } from 'react';
import { ProjectCategory, selectedCategoryReadOnlyProps, selectedCategoryWriteProps } from './types';
import SoftwareInfo from './SoftwareInfo';
import GameDevInfo from './GameDevInfo';
import MusicInfo from './MusicInfo';

export default function Projects() {  
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>(ProjectCategory.Software);

  return (
    <section className="Project">
      <h2>Projects</h2>
      <Selector selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <SelectedInfo selectedCategory={selectedCategory} />
    </section>
  );
}

function Selector({ selectedCategory, setSelectedCategory }: selectedCategoryWriteProps) {
  return (
    <div className="selector">
      <p onClick={() => setSelectedCategory(ProjectCategory.Software)}>
        Software Development
      </p>
      <p onClick={() => setSelectedCategory(ProjectCategory.GameDev)}>
        Game Development
      </p>
      <p onClick={() => setSelectedCategory(ProjectCategory.Music)}>
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