import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Sublinks from '../components/sublinks';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { closeSublinks } from '../redux/features/nav/navSlice';
import Sidebar from '../components/sidebar';

const Sharedlayout = () => {
  const { isSubLinksOpen } = useAppSelector((state: RootState) => state.nav);
  const dispatch = useAppDispatch();

  return (
    <main>
      <Navbar />
      {isSubLinksOpen && <Sublinks />}
      <Sidebar />
      <div
        onMouseOver={() => {
          dispatch(closeSublinks());
        }}
        className="page-container"
      >
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};
export default Sharedlayout;
