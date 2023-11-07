import { useState } from 'react';
import styled from 'styled-components';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { closeSidebar } from '../redux/features/nav/navSlice';

const PropertiesAcordion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen((ol) => !ol);
  };
  const dispatch = useAppDispatch();
  return (
    <PropertiesAcordionContainer>
      <div className="toggler" onClick={toggle}>
        <h5>Properties</h5>
        <button>{isOpen ? <BiChevronUp /> : <BiChevronDown />}</button>
      </div>

      <div className={isOpen ? ' sub-links show-sublinks' : 'sub-links'}>
        <ul>
          <h5>Residential Property </h5>
          <Link
            to={'/properties?category=residential&type=sale'}
            onClick={() => dispatch(closeSidebar())}
          >
            Residential Property for sale
          </Link>
          <Link
            to="/properties?category=residential&type=rent"
            onClick={() => dispatch(closeSidebar())}
          >
            Residential Property to let
          </Link>
        </ul>
        <ul>
          <h5>Commercial Property </h5>
          <Link
            to="/properties?category=commercial&type=sale"
            onClick={() => dispatch(closeSidebar())}
          >
            Property for sale
          </Link>
          <Link
            to="/properties?category=commercial&type=rent"
            onClick={() => dispatch(closeSidebar())}
          >
            Property to let
          </Link>
        </ul>
      </div>
    </PropertiesAcordionContainer>
  );
};
export default PropertiesAcordion;

const PropertiesAcordionContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  transition: var(--transition);
  .toggler {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h5 {
      color: var(--blue-700);
    }
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: 2.5rem;
      color: var(--blue-700);
    }
  }

  .sub-links {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    transform: translateY(-150%);
    ul {
      display: none;
      grid-template-columns: 1fr;
      transition: var(--transition);
      h5 {
        margin-bottom: 0.25rem;
        font-size: 1rem;
        color: var(--orange);
      }
      a {
        text-decoration: none;
        color: var(--blue-700);
      }
    }
  }
  .show-sublinks {
    transform: translateY(0);
    transition: var(--transition);
    ul {
      display: grid;
    }
  }
`;
