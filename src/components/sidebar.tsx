import { FaPowerOff, FaTimes } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { closeSidebar } from '../redux/features/nav/navSlice';
import PropertiesAcordion from './PropertiesAcordion';
import { Link } from 'react-router-dom';
import LogoComponent from './LogoComponent';
import { logoutUser } from '../redux/features/auth/authSlice';
import styled from 'styled-components';
const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((state: RootState) => state.nav);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(closeSidebar());
  };

  return (
    <NavbarContainer
      className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}
    >
      <div className="sidebar-header">
        <LogoComponent />
        <button
          onClick={() => dispatch(closeSidebar())}
          className="close-sidebar"
        >
          <FaTimes />
        </button>
      </div>
      <div className="sidebar-body">
        <PropertiesAcordion />
        <Link to={'/about'} onClick={() => dispatch(closeSidebar())}>
          {' '}
          About Us
        </Link>
        <Link to={'/blog'} onClick={() => dispatch(closeSidebar())}>
          {' '}
          Blog{' '}
        </Link>
        <Link to={'/contact'} onClick={() => dispatch(closeSidebar())}>
          {' '}
          Contact Us{' '}
        </Link>
      </div>
      <div className="sidebar-footer">
        {user && (
          <button type="button" onClick={handleLogout} className="button">
            Log out
            <span className="button-icon ">
              <FaPowerOff className="link-icon" />{' '}
            </span>
          </button>
        )}
      </div>
    </NavbarContainer>
  );
};
export default Sidebar;

const NavbarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  .sidebar-footer {
    margin-top: auto;
  }
`;
