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
            path="/admin"
            element={
              <ProtectedPages>
                <AdminLayout />
              </ProtectedPages>
            }
          >
            <Route path="/admin/addproperty" element={<AddProperty />} />
            <Route path="/admin/myblogs" element={<MyBlogs />} />
            <Route path="/admin/blog" element={<WriteBlog />} />
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
