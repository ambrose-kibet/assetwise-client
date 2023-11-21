import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAppSelector } from '../redux/hooks';
import { logoutUser } from '../redux/features/auth/authSlice';
import { useDispatch } from 'react-redux';
import { AnyAction } from '@reduxjs/toolkit';

const Footer = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser() as unknown as AnyAction);
  };

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
        <ul>
          <h5>{user ? 'My Account' : 'Useful Links'} </h5>
          {!user && <Link to={'/auth'}> Login/Register</Link>}
          {user && <Link to={'/dashboard'}>Profile </Link>}
          {user && (
            <button type="button" onClick={handleLogout}>
              Log out
            </button>
          )}
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
  background: var(--clr-white);
  margin-top: 2rem;
  div {
    width: 100%;
    max-width: var(--max-width);
    display: grid;
    grid-template-columns: 1fr;
    max-width: var(--max-width);
    padding: 0.5rem;
    gap: 1rem;
    margin-left: auto;
    margin-right: auto;
    ul {
      display: grid;
      grid-template-columns: 1fr;
      h5 {
        margin-top: 0.25rem;
        margin-bottom: 0.25rem;
        color: var(--orange);
      }

      a {
        text-decoration: none;
        color: var(--blue-700);
      }
      button {
        background: transparent;
        border: none;
        color: var(--blue-700);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        span {
          font-size: 1rem;
          margin-left: 0.5rem;
        }
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
