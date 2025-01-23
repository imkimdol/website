import './InfoCard.css';

interface InfoCardProps {
  title: string,
  image: string | null,
  desc: string,
  url: string | null
}

export default function InfoCard({title, image, desc, url}: InfoCardProps) {
  return (
    <div className="infoCard">
      <h3>{title}</h3>
      {image && <img src={image} alt=""/>}
      <p>{desc}</p>
      {url && <a href={url} target="_blank" rel="noreferrer">Github</a>}
    </div>
  );
};