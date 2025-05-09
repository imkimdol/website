import './Contact.css';

export default function Contact() {
  return (
    <div className="innerPanel contact">
      <h2>Contact</h2>
      <div className="innerPanelInner">
        <h3>
          Feel free to reach out!
        </h3>
        <div className='icons'>
          <ul>
            <li><a href="mailto:contact@harperkim.ca" target="_blank" rel="noreferrer">
              <img src="/images/icons/email.png" alt="Email"/>
            </a></li>
            <li><a href="https://www.linkedin.com/in/harper-kim/" target="_blank" rel="noreferrer">
              <img src="/images/icons/linkedin.png" alt="LinkedIn"/>
            </a></li>
            <li><a href="https://github.com/imkimdol" target="_blank" rel="noreferrer">
              <img src="/images/icons/github.png" alt="Github"/>
            </a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}