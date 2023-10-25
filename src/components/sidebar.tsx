import logo from '../assets/logo.svg';
import { FaTimes } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { closeSidebar } from '../redux/features/nav/navSlice';
import PropertiesAcordion from './PropertiesAcordion';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((state: RootState) => state.nav);
  const dispatch = useAppDispatch();

  return (
    <aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
      <div className="sidebar-header">
        <div className="logo-container">
          <img src={logo} alt="logo" height={'100%'} />
        </div>

        <button
          onClick={() => dispatch(closeSidebar())}
          className="close-sidebar"
        >
          <FaTimes />
        </button>
      </div>
      <div className="sidebar-body">
        <PropertiesAcordion />
        <Link to={'/about'}>About</Link>
        <Link to="gggd"> Blog</Link>
      </div>
      <div className="sidebar-footer"></div>
    </aside>
  );
};
export default Sidebar;
