import { ReactElement } from 'react';
import { useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { Navigate } from 'react-router-dom';
const AdminProtectedPages = ({ children }: { children: ReactElement }) => {
  const { user } = useAppSelector((state: RootState) => state.auth);

  if (!user || user?.role !== 'admin') {
    return <Navigate to="/" />;
  }
  return children;
};
export default AdminProtectedPages;
