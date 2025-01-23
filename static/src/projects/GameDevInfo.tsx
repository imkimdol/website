import './GameDevInfo.css';
import InfoCard from './InfoCard';

export default function GameDevInfo() {
  return (
    <div className="innerPanel gameDevInfo">
      <h2>Game Development</h2>
      <div className="cardsOuter">
        <ul className="cards">
          <InteractiveWebsite />
          <RhythmGamePrototype />
          <UnwateredCrops />
        </ul>
      </div>
    </div>
  );
}

function InteractiveWebsite() {
  return (
    <InfoCard
      title="Interactive Website"
      image="/images/interactive.png"
      desc="The interactive portion of this website is built with Godot Engine. It is designed to be a engaging way to learn about my work and my passions."
      url="https://github.com/imkimdol/website-source"
    />
  );
};

function RhythmGamePrototype() {
  return (
    <InfoCard
      title="Rhythm Game Prototype"
      image="https://github.com/imkimdol/rhythm-game-prototype/blob/main/example.png?raw=true"
      desc="A prototype for a basic rhythm game. Built with Godot Engine and created for the UBC Game Dev club."
      url="https://github.com/imkimdol/rhythm-game-prototype"
    />
  );
};

function UnwateredCrops() {
  return (
    <InfoCard
      title="Unwatered Crops"
      image="https://github.com/imkimdol/UnwateredCrops/blob/main/example.png?raw=true"
      desc="A Stardew Valley mod that notifies players of unwatered crops when leaving the farm."
      url="https://github.com/imkimdol/UnwateredCrops"
    />
  );
};

// function FuturePlans() {
//   return (
//     <InfoCard
//       title="Future Plans"
//       desc="ASDF"
//       url={null}
//     />
//   );
// };