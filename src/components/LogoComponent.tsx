import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { closeSidebar } from '../redux/features/nav/navSlice';
import { useAppDispatch } from '../redux/hooks';
const LogoComponent = () => {
  const dispatch = useAppDispatch();
  return (
    <Link
      to="/"
      className="logo-container"
      onClick={() => dispatch(closeSidebar())}
    >
      <img src={logo} alt="logo" height={'100%'} />
    </Link>
  );
};
export default LogoComponent;
