import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
const Navbar = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const extraMenuRef = useRef<HTMLDivElement>(null);

  return (
    <Nav>
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="logo" height={'100%'} />
        </div>
        <div className="nav-links" ref={containerRef}>
          <Link to={'/'} className="drop-down">
            Properties
          </Link>

          <Link to={'/about'}>About</Link>

          <a href="gggd"> Blog</a>
        </div>
      </div>
      <div className="extra-menu" ref={extraMenuRef}>
        <div className="info-container">
          <h4>Companions in your real estate journey </h4>
          <p>
            Explore residential and commercial properties in Kenya for sale or
            rent.
          </p>
        </div>
        <ul className="residential-container">
          <h4>Residential Property </h4>
          <Link to={'/'}>Residential Property for sale </Link>
          <Link to={'/'}>Residential Property to let </Link>
        </ul>
        <ul className="commercial-container">
          <h4>Commercial Property </h4>
          <Link to={'/'}> Property for sale</Link>
          <Link to={'/'}> Property to let </Link>
        </ul>
      </div>
    </Nav>
  );
};
export default Navbar;

const Nav = styled.nav`
  width: 100vw;
  display: grid;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  position: sticky;
  top: 0;
  height: fit-content;
  overflow: hidden;
  z-index: 999;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    background-color: transparent;
    width: 100vw;
    max-width: var(--max-width);

    .logo-container {
      width: 10rem;
      height: 5rem;
    }
    .nav-links {
      display: flex;
      justify-content: space-between;
      a {
        text-decoration: none;
        color: var(--clr-grey-3);
        font-weight: 500;
        font-size: 1.2rem;
        transition: var(--transition);
        &:hover {
          color: var(--clr-primary-5);
        }
      }
    }
  }
  .extra-menu.show {
    display: grid;
  }
  .extra-menu {
    display: none;
    grid-template-columns: repeat(3, 1fr);
    max-width: var(--max-width);
    background-color: var(--clr-white);
    padding: 3rem 2rem;

    ul {
      display: grid;
      justify-items: center;
      text-align: end;
    }
  }
  &:hover {
  }
`;
