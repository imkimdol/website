import './SoftwareInfo.css';
import InfoCard from './InfoCard';

export default function SoftwareInfo() {
  return (
    <div className="innerPanel softwareInfo">
      <h2>Software Projects</h2>
      <div className="cardsOuter">
        <ul className="cards">
          <ThisWebsite />
          <WorkpianNameBlaster />
          <TempoRubato />
          <LiVer />
          <ImageBoard />
        </ul>
      </div>
    </div>
  );
};

function ThisWebsite() {
  return (
    <InfoCard
      title="Static Webpage"
      desc="This website consists of two parts - a static webpage and an interactive game. The static section was built with React.js and Create React App. All the visuals and interactions were written in TypeScript, JSX, and plain CSS."
      url="https://github.com/imkimdol/website-source"
    />
  );
};

function WorkpianNameBlaster() {
  return (
    <InfoCard
      title="Workpian Name Blaster"
      desc="A Chromium browser extension for censoring the most common instances of sensitive data found in UBC's Workday and Appian student information platforms. Built to speed up internal documentation processes."
      url="https://github.com/imkimdol/workpian-name-blaster"
    />
  );
};

function TempoRubato() {
  return (
    <InfoCard
      title="Tempo Rubato"
      desc="A Discord bot for playing music with user-defined playrates. Supports streaming, queueing, skipping, and more quality-of-life music streaming features. Uses Discord Player and discord.js as the main framework."
      url="https://github.com/imkimdol/tempo-rubato"
    />
  );
};

function LiVer() {
  return (
    <InfoCard
      title="LiVer"
      desc="A Windows CLI application for managing versions of Ableton Live project files. Automatically copies project files to create new versions and remembers changelogs assigned to every version."
      url="https://github.com/imkimdol/LiVer"
    />
  );
}

function ImageBoard() {
  return (
    <InfoCard
      title="Image Board"
      desc="An image-posting and sharing application similar to popular social media platforms. Uses the popular MongoDB, Express.js, React.js, Node.js (MERN) stack."
      url="https://github.com/imkimdol/image-board"
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

// function DiscordBotHelpers() {
//   return (
//     <li className="discordBotHelpers">
//       <h3>Discord Bot Helpers</h3>
//       <p>
//       </p>
//       <ul>
//         <li>
//           <h4>Discord WOL</h4>
//           <p>
//           </p>
//           <a href="https://github.com/imkimdol/discord-wol" target="_blank" rel="noreferrer">Github</a>
//         </li>
//         <li>
//           <h4>Discord Roulette</h4>
//           <p>
//           </p>
//           <a href="https://github.com/imkimdol/discord-roulette" target="_blank" rel="noreferrer">Github</a>
//         </li>
//         <li>
//           <h4>Discord Scheduler</h4>
//           <p>
//           </p>
//           <a href="https://github.com/imkimdol/discord-scheduler" target="_blank" rel="noreferrer">Github</a>
//         </li>
//         <li>
//           <h4>Minecraft Server Status Checker</h4>
//           <p>
//           </p>
//           <a href="https://github.com/imkimdol/minecraft-server-status-checker" target="_blank" rel="noreferrer">Github</a>
//         </li>
//       </ul>
//     </li>
//   );
// };