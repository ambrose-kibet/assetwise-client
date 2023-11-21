import {
  ErrorPage,
  LandiningPage,
  Sharedlayout,
  Properties,
  Aboutpage,
  Contactpage,
  Blogpage,
  SingleProperty,
  SingleBlog,
  WriteBlog,
  AdminLayout,
  AuthPage,
  ProtectedPages,
  MyBlogs,
  AddProperty,
  UserLayout,
  AdminProtectedPages,
  ProfilePage,
} from './pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<Sharedlayout />}>
          <Route index element={<LandiningPage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<SingleProperty />} />
          <Route path="/contact" element={<Contactpage />} />
          <Route path="/blog" element={<Blogpage />} />
          <Route path="/blog/:id" element={<SingleBlog />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedPages>
                <UserLayout />
              </ProtectedPages>
            }
          >
            <Route index element={<ProfilePage />} />
            <Route
              path="/dashboard/admin"
              element={
                <AdminProtectedPages>
                  <AdminLayout />
                </AdminProtectedPages>
              }
            >
              <Route
                path="/dashboard/admin/addproperty"
                element={<AddProperty />}
              />
              <Route path="/dashboard/admin/myblogs" element={<MyBlogs />} />
              <Route path="/dashboard/admin/blog" element={<WriteBlog />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
