import './SoftwareInfo.css';
import InfoCard from './InfoCard';

export default function SoftwareInfo() {
  return (
    <div className="innerPanel softwareInfo">
      <h2>Software Projects</h2>
      <div className="cardsOuter">
        <div className="cards">
          <ThisWebsite />
          <WorkpianNameBlaster />
          <TempoRubato />
          <LiVer />
          <ImageBoard />
          <DiscordBotHelpers />
          <FuturePlans />
        </div>
      </div>
    </div>
  );
};

function ThisWebsite() {
  return (
    <InfoCard
      title="Static Webpage"
      image="/images/static.png"
      desc="This website consists of two parts - a static webpage and an interactive game. The static section was built with React.js and Create React App. All the visuals and interactions were written in TypeScript, JSX, and plain CSS."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/website-source" }] }
    />
  );
};

function WorkpianNameBlaster() {
  return (
    <InfoCard
      title="Workpian Name Blaster"
      image="https://github.com/imkimdol/workpian-name-blaster/blob/main/preview.gif?raw=true"
      desc="A Chromium browser extension for censoring the most common instances of sensitive data found in UBC's Workday and Appian student information platforms. Built to speed up internal documentation processes."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/workpian-name-blaster" }] }
    />
  );
};

function TempoRubato() {
  return (
    <InfoCard
      title="Tempo Rubato"
      image="https://github.com/imkimdol/tempo-rubato/blob/main/commands.png?raw=true"
      desc="A Discord bot for playing music with user-defined playrates. Supports streaming, queueing, skipping, and more quality-of-life music streaming features. Uses Discord Player and discord.js as the main framework."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/tempo-rubato" }] }
    />
  );
};

function LiVer() {
  return (
    <InfoCard
      title="LiVer"
      image="https://github.com/imkimdol/LiVer/blob/main/README-Preview.png?raw=true"
      desc="A Windows CLI application for managing versions of Ableton Live project files. Automatically copies project files to create new versions and remembers changelogs assigned to every version."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/LiVer" }] }
    />
  );
}

function ImageBoard() {
  return (
    <InfoCard
      title="Image Board"
      image="https://github.com/imkimdol/image-board/blob/main/image-board.png?raw=true"
      desc="An image-posting and sharing application similar to popular social media platforms. Uses the popular MongoDB, Express.js, React.js, Node.js (MERN) stack."
      buttons={ [{ text: "GitHub", url: "https://github.com/imkimdol/image-board" }] }
    />
  );
};

function DiscordBotHelpers() {
  return (
    <InfoCard
      title="Discord Bot Helpers"
      image={null}
      desc="Simple utilities to automate and simplify tasks. They are created as Discord bots when the functionality of the project is too simple to justify a dedicated user interface. Supports application commands."
      buttons={[
        { text: "WOL", url: "https://github.com/imkimdol/discord-wol" },
        { text: "Roulette", url: "https://github.com/imkimdol/discord-roulette" },
        { text: "Scheduler", url: "https://github.com/imkimdol/discord-scheduler" },
        { text: "Minecraft Server Status Checker", url: "https://github.com/imkimdol/minecraft-server-status-checker" },
      ]}
    />
  );
};

function FuturePlans() {
  return (
    <InfoCard
      title="Future Plans"
      image={null}
      desc="Harper has a handful of new project ideas in the works.
            He plans to write utility VST plugins for faster music production workflows, build an app for university students, and work with cloud services to remotely host his bots.
            A whole rework of LiVer with new features, a GUI, and native support for Windows and MacOS is planned as well."
      buttons={[]}
    />
  );
};