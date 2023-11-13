import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import {
  closeSublinks,
  openSidebar,
  openSublinks,
} from '../redux/features/nav/navSlice';
import { FaBars } from 'react-icons/fa';
import LogoComponent from './LogoComponent';

const Navbar = () => {
  const dispatch = useAppDispatch();

  const showMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const link = e.target as HTMLAnchorElement;
    const posY = link.getBoundingClientRect().bottom;
    dispatch(openSublinks(posY - 3));
  };
  const handleRemove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const item = e.target as HTMLElement;

    if (!item.classList.contains('drop-down')) {
      dispatch(closeSublinks());
    }
  };
  return (
    <Nav onMouseMove={handleRemove}>
      <div className="container">
        <LogoComponent />
        <div className="nav-links" onMouseOver={showMenu}>
          <p className="drop-down">Properties</p>
          <Link to={'/about'}>About</Link>
          <Link to={'/blog'}>Blog</Link>
        </div>
        <button
          className=" nav-toggler"
          onClick={() => dispatch(openSidebar())}
        >
          <FaBars />
        </button>
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
  left: 0;
  height: fit-content;
  overflow: hidden;
  z-index: 99;
  background: var(--clr-white);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    background-color: transparent;
    width: 100vw;
    max-width: var(--max-width);
    .nav-links {
      display: flex;
      justify-content: space-between;
      a,
      p {
        text-decoration: none;
        color: var(--blue-500);
        font-weight: 500;
        font-size: 1.2rem;
        transition: var(--transition);
        padding: 2rem 4.25rem;
        &:hover {
          color: var(--clr-primary-5);
          cursor: pointer;
        }
      }
    }
    &:hover {
      background-color: var(--clr-white);
    }
    button {
      display: none;
      font-size: 3rem;
      background: transparent;
      border: transparent;
      color: var(--blue-700);
      transition: var(--transition);
      &:hover {
        transform: rotate(180deg);
      }
    }
  }
  @media screen and (max-width: 768px) {
    .container {
      padding: 0.5rem;
      .nav-links {
        display: none;
      }
      button {
        display: flex;
      }
    }
  }
`;
