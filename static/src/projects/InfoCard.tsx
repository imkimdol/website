import './InfoCard.css';

interface InfoCardProps {
  title: string,
  desc: string,
  url: string | null
}

export default function InfoCard({title, desc, url}: InfoCardProps) {
  return (
    <div className="infoCard">
      <h3>{title}</h3>
      <p>{desc}</p>
      {url && <a href={url} target="_blank" rel="noreferrer">Github</a>}
    </div>
  );
};