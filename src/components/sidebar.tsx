import { FaTimes } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { closeSidebar } from '../redux/features/nav/navSlice';
import PropertiesAcordion from './PropertiesAcordion';
import { Link } from 'react-router-dom';
import LogoComponent from './LogoComponent';

import styled from 'styled-components';
import DashBoardAcordion from './DashboardAccordion';
const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((state: RootState) => state.nav);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.auth);

  return (
    <NavbarContainer
      className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}
    >
      <div className="sidebar-header">
        {(user && (
          <div className="nav-header">
            <img src={user?.avatar} alt="avatar" />
            <h3>{user?.name}</h3>
          </div>
        )) || <LogoComponent />}
        <button
          onClick={() => dispatch(closeSidebar())}
          className="close-sidebar"
        >
          <FaTimes />
        </button>
      </div>
      <div className="sidebar-body">
        <PropertiesAcordion />
        {(user && user.role === 'admin' && <DashBoardAcordion />) || null}
        <Link to={'/about'} onClick={() => dispatch(closeSidebar())}>
          About Us
        </Link>
        <Link to={'/blog'} onClick={() => dispatch(closeSidebar())}>
          Blog
        </Link>
        <Link to={'/contact'} onClick={() => dispatch(closeSidebar())}>
          Contact Us
        </Link>
      </div>
      <div className="sidebar-footer"></div>
    </NavbarContainer>
  );
};
export default Sidebar;

const NavbarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  .sidebar-header {
    .nav-header {
      color: var(--clr-white);
      img {
        border-radius: 50%;
        border: 3px solid var(--blue-600);
        width: 4rem;
        height: 4rem;
      }
      h3 {
        color: var(--blue-600);
        text-transform: capitalize;
        margin: 0;
        font-size: 0.75rem;
        text-align: center;
      }
    }
  }
  .sidebar-footer {
    margin-top: auto;
  }
`;
