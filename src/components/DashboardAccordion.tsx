import { useState } from 'react';
import styled from 'styled-components';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hooks';
import { closeSidebar } from '../redux/features/nav/navSlice';

const DashBoardAcordion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen((ol) => !ol);
  };
  const dispatch = useAppDispatch();
  return (
    <PropertiesAcordionContainer>
      <div className="toggler" onClick={toggle}>
        <h5>Dashboard</h5>
        <button>{isOpen ? <BiChevronUp /> : <BiChevronDown />}</button>
      </div>

      <div className={isOpen ? ' sub-links show-sublinks' : 'sub-links'}>
        <ul>
          <h5>Blog </h5>
          <Link
            to={'/dashboard/admin/blog'}
            onClick={() => dispatch(closeSidebar())}
          >
            Write Blog
          </Link>
          <Link
            to="/dashboard/admin/myblogs"
            onClick={() => dispatch(closeSidebar())}
          >
            My Blogs
          </Link>
        </ul>
        <ul>
          <h5>Property </h5>
          <Link
            to="/dashboard/admin/addproperty"
            onClick={() => dispatch(closeSidebar())}
          >
            Add Property
          </Link>
        </ul>
      </div>
    </PropertiesAcordionContainer>
  );
};
export default DashBoardAcordion;

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
