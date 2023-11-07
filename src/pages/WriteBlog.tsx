import styled from 'styled-components';
import { BiImageAdd } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';

import { FaFeatherAlt } from 'react-icons/fa';
import FormTextArea from '../components/FormTextArea';
import FormInputComponent from '../components/FormInputComponent';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { handleChange } from '../redux/features/blog/blogSlice';
import SelectComponent from '../components/SelectComponent';
import { categories } from '../utils/data';
import RichTextEditor from '../components/RichTextEditor';

const WriteBlog = () => {
  const dispatch = useAppDispatch();
  const {
    blogContent: {
      category,
      content,
      coverImage,
      description,
      status,
      tags,
      title,
    },
    isEditing,
  } = useAppSelector((state: RootState) => state.blog);
  const handleChanges = ({ name, value }: { name: string; value: string }) => {
    dispatch(handleChange({ name, value }));
  };

  return (
    <WriteBlogContainer>
      <div className="container">
        <h2 className="section-title">
          {isEditing ? 'Edit' : 'Write'} <span>Story</span>
        </h2>
        <div className="coverimage-container">
          <img src={coverImage} alt="" />
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
                name="coverImage"
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
                name="title"
                value={title}
                onChange={(e) =>
                  handleChanges({ name: 'title', value: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Description</label>
              <FormTextArea
                name="description"
                placeholder="Add a short description..."
                value={description}
                handleChange={handleChanges}
              />
            </div>
            <RichTextEditor content={content} handleChanges={handleChanges} />

            <div className="form-group">
              <label htmlFor="title">Category</label>
              <SelectComponent
                name="category"
                options={categories}
                value={category}
                handleChange={handleChanges}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Tags</label>
              <FormInputComponent
                type="text"
                placeholder="#rent"
                name="tags"
                value={tags}
                handleChange={handleChanges}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Status</label>
              <select
                className="form-control"
                name="status"
                value={status}
                onChange={(e) =>
                  handleChanges({ name: 'status', value: e.target.value })
                }
              >
                <option value="draft">Draft</option>
                <option value="publish">Publish</option>
              </select>
            </div>
            <div className="form-group">
              <button className="button">
                Publish Story
                <span className="button-icon ">
                  <FaFeatherAlt />
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </WriteBlogContainer>
  );
};
export default WriteBlog;

const WriteBlogContainer = styled.div`
  .container {
    padding: 0 10px;
  }
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
