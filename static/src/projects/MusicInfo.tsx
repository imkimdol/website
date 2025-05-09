import './MusicInfo.css';

export default function MusicInfo() {
  return (
    <div className="innerPanel musicInfo">
      <h2>Music Production</h2>
      <div className="innerPanelInner">
        <h3>
          Harper is producing music under the alias Kimdol.
        </h3>
        <div className="icons">
          <ul>
            <li><a href="https://open.spotify.com/artist/4KdWdsftuaGAGVw595eJNM" target="_blank" rel="noreferrer">
              <img src="/images/icons/spotify.png" alt="Spotify"/>
            </a></li>
            <li><a href="https://music.apple.com/artist/kimdol/1602798959" target="_blank" rel="noreferrer">
              <img src="/images/icons/apple-music.png" alt="Apple Music"/>
            </a></li>
            <li><a href="https://www.youtube.com/@imkimdol" target="_blank" rel="noreferrer">
              <img src="/images/icons/youtube-music.png" alt="YouTube Music"/>
            </a></li>
            <li><a href="https://kimdol.bandcamp.com/" target="_blank" rel="noreferrer">
              <img src="/images/icons/bandcamp.png" alt="Bandcamp"/>
            </a></li>
            <li><a href="https://kimdol.com" target="_blank" rel="noreferrer">
              <img src="/images/icons/website.png" alt="Website"/>
            </a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}