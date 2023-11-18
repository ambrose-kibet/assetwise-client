import { FaAngellist, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import styled from 'styled-components';
import { people } from '../utils/data';
import PeopleCard from '../components/PeopleCard';

const ContactPage = () => {
  return (
    <ContactContainer className="section contact">
      <h2 className="section-title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact-container container grid">
        <div className="contact-data">
          <h4 className="contact-title">Feel free to get in touch with us !</h4>
          <p className="contact-description">
            Feel free to contact us with any questions, requests or any
            opportunities concerning your property. We &#39;ll be happy to help.
          </p>
          <div className="contact-info">
            {people.map((person) => (
              <PeopleCard key={person.id} {...person} />
            ))}
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/ambrose-kibet"
              className="contact-social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ambrose-kibet/"
              className="contact-social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://wellfound.com/u/ambrosekibet"
              className="contact-social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaAngellist />
            </a>
            <a
              href="https://twitter.com/ambrose_kibet"
              className="contact-social-link"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </ContactContainer>
  );
};
export default ContactPage;

const ContactContainer = styled.section`
  .contact-container {
    grid-template-columns: 4fr 8fr;
    align-items: center;
    padding: 0 0.5rem;
  }

  .contact-title {
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 1.7rem;
  }

  .contact-description {
    font-size: var(--small-font-size);
    line-height: 1.6;
  }

  .contact-description,
  .contact-info .info-item {
    margin-bottom: 20px;
  }

  .contact-info .info-item {
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  .contact-info .info-icon {
    color: var(--blue-700);
    font-size: 2.4rem;
  }

  .contact-info .info-title {
    font-size: 0.9rem;
  }

  .contact-info .info-desc {
    font-size: var(--small-font-size);
    font-weight: var(--weight-500);
  }

  .contact-socials {
    display: flex;
    column-gap: 1rem;
  }

  .contact-social-link {
    background-color: var(--container-color);
    color: var(--title-color);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    text-align: center;
    line-height: 44px;
    transition: all 0.3s ease;
  }

  .contact-social-link:hover {
    background-color: var(--first-color);
    color: var(--text-white);
  }

  .form-input-group {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 30px;
  }

  .form-input-div {
    margin-bottom: 30px;
  }

  .form-control {
    border: 1px solid var(--container-color);
    background-color: var(--clr-white);
    color: var(--title-color);
    width: 100%;
    padding: 12px 24px;
    border-radius: 30px;
    font-size: var(--small-font-size);
    transition: all 0.3s ease;
  }

  .form-control:focus {
    border-color: var(--first-color);
  }

  .textarea {
    resize: none;
    height: 160px;
  }

  .contact-button-icon {
    font-size: 1.8rem;
    line-height: 64px;
  }
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 576px) {
    .contact-container {
      grid-template-columns: 1fr;
    }
    .form-input-group {
      grid-template-columns: 1fr;
    }
  }
`;
