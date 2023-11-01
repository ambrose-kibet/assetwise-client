import styled from 'styled-components';
import { BiImageAdd } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from '../utils/constants';
const WriteBlog = () => {
  return (
    <WriteBlogContainer>
      <div className="container">
        <h2 className="section-title">
          Write <span>Story</span>
        </h2>
        <div className="coverimage-container">
          <img src="" alt="" />
        </div>
        <div className="form-container">
          <form>
            <div className="image-container">
              <label htmlFor="coverImage" className="custom-file-label">
                <span className="upload-icon">
                  <BiImageAdd />
                </span>{' '}
                Add cover image
              </label>
              <input
                type="file"
                name="avatar"
                id="coverImage"
                style={{ display: 'none' }}
              />
            </div>
            <div className="form-group title-container">
              <label htmlFor="title">
                <span className="icon">
                  <FaPlus />
                </span>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Description</label>
              <textarea
                className="form-control"
                placeholder=" Add a short description..."
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="title">Content</label>
              <ReactQuill
                theme="snow"
                modules={modules}
                formats={formats}
                className="quill"
                placeholder="Tell us your story..."
              ></ReactQuill>
            </div>

            <div className="form-group">
              <label htmlFor="title">Category</label>
              <select className="form-control">
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="title">Tags</label>
              <input type="text" className="form-control" placeholder="#rent" />
            </div>
            <div className="form-group">
              <label htmlFor="title">Date</label>
              <input type="date" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="title">Status</label>
              <select className="form-control">
                <option value="1">Draft</option>
                <option value="2">Published</option>
              </select>
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </WriteBlogContainer>
  );
};
export default WriteBlog;

const WriteBlogContainer = styled.div`
  .coverimage-container {
    height: 300px;
    width: 100%;
    margin-bottom: 20px;
    img {
      width: 100%;
      border-radius: 5px;
      height: 100%;
      object-fit: cover;
    }
  }
  .form-container {
    form {
      .form-group {
        margin-bottom: 20px;
        label {
          display: block;
          margin-bottom: 10px;
        }
        input,
        textarea,
        select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
        }
        textarea {
          height: 150px;
        }
        .quill {
          .ql-editor {
            min-height: 150px;
          }
        }
      }
      .title-container {
        display: flex;
        align-items: center;
        label {
          .icon {
            font-size: 1.2rem;
            margin-right: 1rem;
            border-radius: 50%;
            padding: 0.5rem;
            background-color: var(--blue-500);
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          margin-bottom: 0;
        }
        input {
          height: 50px;
          border: none;
          outline: none;
          font-size: 1.75rem;
          font-weight: 500;
          width: 100%;
          &::placeholder {
            font-size: 1.75rem;
            font-weight: 500;
          }
        }
      }
      .image-container {
        label {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.5rem;
          .upload-icon {
            font-size: 2rem;
            color: var(--blue-500);
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
`;
