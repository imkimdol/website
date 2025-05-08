import './Footer.css';

export default function Footer() {
  return (
    <section className='footer'>
      <ul>
        <li><a href="https://github.com/imkimdol" target="_blank" rel="noreferrer">
          <img src="/images/icons/github.png" alt="Github"/>
        </a></li>
        <li><a href="https://www.linkedin.com/in/harper-kim/" target="_blank" rel="noreferrer">
          <img src="/images/icons/linkedin.png" alt="LinkedIn"/>
        </a></li>
        <li><a href="mailto:contact@harperkim.ca" target="_blank" rel="noreferrer">
          <img src="/images/icons/email.png" alt="Email"/>
        </a></li>
      </ul>
    </section>
  );
}