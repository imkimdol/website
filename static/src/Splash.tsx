import './Splash.css';
import { useEffect, useState } from 'react';

export default function Splash() {
  const [textIsVisible, setTextIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 500;

      setTextIsVisible(scrollPosition < threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="splash">
      <div className="center">
        <h1>Harper Kim</h1>
        <p className="greeting">
          👋 Hello! I am a student at the University of British Columbia with interests in software development,
          video game development, and music production.
        </p>
        <div className="tryHoverDet">
          <div className="tryOuter">
            <a className="tryInner" href="https://harperkim.ca/interactive"><p>Try my interactive website!</p></a>
          </div>
        </div>
      </div>
      <div className={`bottom ${textIsVisible ? '' : 'hidden'}`}>
        <div>
          <p className="text">
            ∨   or see below to learn more   ∨
          </p>
          <p className="textShadow">
            ∨   or see below to learn more   ∨
          </p>
        </div>
      </div>
    </section>
  );
}