import { FaTimes } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { closeSidebar } from '../redux/features/nav/navSlice';
import PropertiesAcordion from './PropertiesAcordion';
import { Link } from 'react-router-dom';
import LogoComponent from './LogoComponent';
const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((state: RootState) => state.nav);
  const dispatch = useAppDispatch();

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
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
      <div className="sidebar-footer"></div>
    </aside>
  );
};
export default Sidebar;
