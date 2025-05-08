import './GameDevInfo.css';
import { InfoCard, Tags } from './InfoCard';

export default function GameDevInfo() {
  return (
    <div className="innerPanel gameDevInfo">
      <h2>Game Development</h2>
      <div className="cardsOuter">
        <div className="cards">
          <SnakesLaddersAndYut />
          <InteractiveWebsite />
          <RhythmGamePrototype />
          <UnwateredCrops />
          <FuturePlans />
        </div>
      </div>
    </div>
  );
}

function InteractiveWebsite() {
  return (
    <InfoCard
      title="Interactive Website"
      image="/images/projects/website-interactive.png"
      tags={[Tags.Godot, Tags.GDScript]}
      desc="The interactive portion of this website is built with Godot Engine. It is designed to be an entertaining way to learn about my work and my passions."
      buttons={[
        { text: "Try it!", url: "https://harperkim.ca/interactive" },
        { text: "GitHub", url: "https://github.com/imkimdol/website-source" }
      ]}
    />
  );
};

function SnakesLaddersAndYut() {
  return (
    <InfoCard
      title="Snakes, Ladders, and Yut?"
      image="/images/projects/snakes-ladders-yut.png"
      tags={[Tags.Godot, Tags.GDScript]}
      desc="A board game visualizer that combines Snakes and Ladders and the korean board game Yut. Supports 8 players and is designed to be played with real Yut dice. A fully randomized board and player list is generated every time the game is played."
      buttons={[
        { text: "Demo Video", url: "https://youtu.be/Hcsz7XZSPEA" },
        { text: "GitHub", url: "https://github.com/imkimdol/SnakesLaddersAndYut" }
      ]}
    />
  );
};

function RhythmGamePrototype() {
  return (
    <InfoCard
      title="Rhythm Game Prototype"
      image="/images/projects/rhythm-game-proto.png"
      tags={[Tags.Godot, Tags.GDScript]}
      desc="A prototype for a basic rhythm game. Features a fully-featured map editor with note editing, copying, pasting, BPM adjustments, and more. Created for the UBC Game Dev club."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/rhythm-game-prototype" }] }
    />
  );
};

function UnwateredCrops() {
  return (
    <InfoCard
      title="Unwatered Crops"
      image="/images/projects/unwatered-crops.png"
      tags={[Tags.CSharp, Tags.DotNET]}
      desc="A Stardew Valley mod that notifies players of unwatered crops when leaving the farm."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/UnwateredCrops" }] }
    />
  );
};

function FuturePlans() {
  return (
    <InfoCard
      title="Future Plans"
      image={null}
      tags={[Tags.UnrealEngine, Tags.CPP, Tags.CSharp, Tags.DotNET, Tags.Unity, Tags.Java, Tags.Godot, Tags.GDScript]}
      desc="Harper will continue to work on his game development and modding skills.
            He plans to create more mods for his favourite games such as Celeste, Stardew Valley, Rimworld, and Minecraft.
            There are also some small games that are in-progress, so please stay tuned!"
      buttons={[]}
    />
  );
};