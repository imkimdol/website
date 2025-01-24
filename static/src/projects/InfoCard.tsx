import './InfoCard.css';

interface InfoCardProps {
  title: string,
  image: string | null,
  desc: string,
  buttons: ButtonInfo[]
}
interface ButtonInfo {
  text: string,
  url: string
}

export default function InfoCard({title, image, desc, buttons}: InfoCardProps) {
  return (
    <div className="infoCard">
      <h3>{title}</h3>
      {image && <img src={image} alt=""/>}
      <p>{desc}</p>
      <Buttons buttons={buttons}/>
    </div>
  );
};

function Buttons({buttons}: {buttons: ButtonInfo[]}) {
  return (
    <div className="buttons">
      {buttons.map(b => <a href={b.url} target="_blank" rel="noreferrer">{b.text}</a>)}
    </div>
  );
}