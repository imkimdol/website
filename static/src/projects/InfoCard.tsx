import './InfoCard.css';
import './Tags.css';

export enum Tags {
  HTML = "HTML",
  TypeScript = "TypeScript",
  JavaScript = "JavaScript",
  Reactjs = "React.js",
  CSS = "CSS",
  Discordjs = "Discord.js",
  LevelDB = "LevelDB",
  CSharp = "C#",
  DotNET = ".NET",
  MongoDB = "MongoDB",
  Expressjs = "Express.js",
  Nodejs = "Node.js",
  Godot = "Godot Engine",
  GDScript = "GDScript",
  Unity = "Unity",
  Java = "Java",
  CPP = "C++",
  JUCE = "JUCE",
  AWS = "AWS",
  WinUI = "WinUI 3",
  Swift = "Swift",
  SwiftUI = "SwiftUI",
  Nextjs = "Next.js",
  TailwindCSS = "Tailwind CSS",
};
interface InfoCardProps {
  title: string,
  image: string | null,
  tags: Tags[],
  desc: string,
  buttons: ButtonInfo[]
}
interface ButtonInfo {
  text: string,
  url: string
}

export function InfoCard({title, image, tags, desc, buttons}: InfoCardProps) {
  return (
    <div className="infoCard">
      <h3>{title}</h3>
      {image && <a href={image} target="_blank" rel="noreferrer"><img src={image} alt=""/></a>}
      <TagsList tags={tags}/>
      <p>{desc}</p>
      <Buttons buttons={buttons}/>
    </div>
  );
};

function TagsList({tags}: {tags: Tags[]}) {
  return (
    <div className="tags">
      {tags.map(t => <p className={t}>{t}</p>)}
    </div>
  );
}
function Buttons({buttons}: {buttons: ButtonInfo[]}) {
  return (
    <div className="buttons">
      {buttons.map(b => <a href={b.url} target="_blank" rel="noreferrer">{b.text}</a>)}
    </div>
  );
}