import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <ul>
          <h5>Residential Property </h5>
          <Link to={'/properties?category=residential&type=sale'}>
            Residential Property for sale
          </Link>
          <Link to="/properties?category=residential&type=rent">
            Residential Property to let
          </Link>
        </ul>
        <ul>
          <h5>Commercial Property </h5>
          <Link to="/properties?category=commercial&type=sale">
            Property for sale
          </Link>
          <Link to="/properties?category=commercial&type=rent">
            Property to let
          </Link>
        </ul>
        <ul>
          <h5>About Assetwise </h5>
          <Link to={'/about'}> About Us</Link>
          <Link to={'/blog'}> Insights </Link>
          <Link to={'/contact'}> Contact Us </Link>
        </ul>
      </div>
    </FooterContainer>
  );
};
export default Footer;

const FooterContainer = styled.footer`
  width: 100vw;
  display: flex;
  justify-content: center;
  div {
    width: 100%;
    max-width: var(--max-width);
    display: grid;
    grid-template-columns: 1fr;
    max-width: var(--max-width);
    padding: 1rem;
    gap: 1rem;
    margin-left: auto;
    margin-right: auto;
    ul {
      display: grid;
      grid-template-columns: 1fr;
      h5 {
        margin-bottom: 0.25rem;
        color: var(--orange);
      }

      a {
        text-decoration: none;
        color: var(--blue-700);
      }
    }
  }
  @media screen and (min-width: 640px) {
    div {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 768px) {
    div {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
