import styled from 'styled-components';
import { BiImageAdd } from 'react-icons/bi';
import { FaPen, FaPlus, FaTimes } from 'react-icons/fa';
import { FaFeatherAlt } from 'react-icons/fa';
import FormTextArea from '../components/FormTextArea';
import FormInputComponent from '../components/FormInputComponent';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import {
  addTag,
  createBlog,
  getSingleBlog,
  handleChange,
  removeTag,
  setIsEditing,
  updateBlog,
  uploadImage,
} from '../redux/features/blog/blogSlice';
import SelectComponent from '../components/SelectComponent';
import RichTextEditor from '../components/RichTextEditor';
import Loading from '../components/spinnner';
import { toast } from 'react-toastify';
import { useEffect, useRef } from 'react';
import { getCategories } from '../redux/features/blog/categorySlice';
import CheckBoxInput from '../components/CheckBoxInput';
import { useSearchParams } from 'react-router-dom';

const WriteBlog = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const titleRef = useRef<HTMLInputElement>(null);
  const editId = searchParams.get('editId');

  const {
    blogContent: {
      category,
      content,
      coverImage,
      description,
      status,
      tag,
      tags,
      title,
      featured,
    },
    isEditing,
    isLoading,
  } = useAppSelector((state: RootState) => state.blog);
  //

  const { categories } = useAppSelector((state: RootState) => state.category);
  const handleChanges = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    if (name === 'featured') {
      dispatch(
        handleChange({
          name,
          value: (event.target as HTMLInputElement).checked,
        })
      );

      return;
    }
    dispatch(handleChange({ name, value: value as string }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    if (input) {
      const file = input.files?.[0];
      if (!file) {
        return;
      } else if (!/^image\//.test(file.type)) {
        toast.error('You could only upload images.');
      } else if (file.size > 1024 * 1024) {
        toast.error('Image size must be less than 1 MB.');
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          dispatch(
            handleChange({ name: 'coverImage', value: reader.result as string })
          );
        };
        dispatch(uploadImage(file));
      }
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !title ||
      !description ||
      !content ||
      !category ||
      !tags ||
      !status ||
      !coverImage
    ) {
      return toast.error('Please fill all the fields');
    }
    if (title.length < 6) {
      return toast.error('Title must be at least 6 characters long.');
    }
    if (description.length < 30) {
      return toast.error('Description must be at least 30 characters long.');
    }
    if (content.length < 10) {
      return toast.error('Content must be at least 10 characters long.');
    }
    if (tags.length < 1) {
      return toast.error('Add at least one tag.');
    }

    if (isEditing) {
      dispatch(
        updateBlog({
          _id: editId || '',
          title,
          description,
          content,
          tags,
          category,
          status,
          coverImage,
          featured,
        })
      );
      return;
    }
    dispatch(
      createBlog({
        title,
        description,
        content,
        tags,
        category,
        status,
        coverImage,
        featured,
      })
    );
  };
  const addTags = () => {
    if (!tag?.trim()) return toast.error(' cannot add null values');
    dispatch(addTag(tag));
  };
  useEffect(() => {
    if (editId) {
      dispatch(setIsEditing(true));
      dispatch(getSingleBlog(editId));
    }
  }, [dispatch, editId]);
  useEffect(() => {
    dispatch(getCategories());
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, [dispatch]);
  return (
    <WriteBlogContainer>
      <div className="container">
        <h2 className="section-title">
          {isEditing ? 'Edit' : 'Write'} <span>Story</span>
        </h2>
        <div className="coverimage-container">
          <img src={coverImage} alt="" />
          {isLoading && <Loading />}
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
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
                onChange={handleImageChange}
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
                ref={titleRef}
                onChange={(e) => handleChanges(e)}
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
            <div className="group-two">
              <label htmlFor="title">Tags</label>
              <div className="group-this">
                <FormInputComponent
                  name="tag"
                  handleChange={handleChanges}
                  placeholder="Add tag eg. rent"
                  type="text"
                  value={tag! || ''}
                />
                <button type="button" className="button" onClick={addTags}>
                  add tag
                  <span className="button-icon">
                    <FaPlus />
                  </span>
                </button>
              </div>
              <div className="amenities">
                {(tags.length &&
                  tags!.map((tag, index) => (
                    <span key={index} className="amenity">
                      {tag}
                      <button
                        type="button"
                        onClick={() => dispatch(removeTag(tag))}
                      >
                        <FaTimes />
                      </button>
                    </span>
                  ))) ||
                  null}
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="title">Status</label>
              <select
                className="form-control"
                name="status"
                value={status}
                onChange={(e) =>
                  handleChanges(e as React.ChangeEvent<HTMLSelectElement>)
                }
              >
                <option value="draft">Draft</option>
                <option value="publish">Publish</option>
              </select>
            </div>
            <CheckBoxInput
              handleChange={handleChanges}
              name="featured"
              value={featured}
            />
            <div className="form-group">
              <button className="button" type="submit">
                {isEditing ? 'Edit' : ' Publish '} Story
                <span className="button-icon ">
                  {isEditing ? <FaPen /> : <FaFeatherAlt />}
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
    position: relative;
    img {
      width: 100%;
      border-radius: 5px;
      height: 100%;
      object-fit: cover;
    }
    div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 99;
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
      .group-two {
        display: grid;
        .group-this {
          display: flex;
          align-items: center;
          input {
            border-bottom: none;
            margin-top: 1rem;
          }
        }
        .amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          .amenity {
            display: flex;
            align-items: center;
            background: var(--color-white);
            padding: 0.5rem 1rem;
            border-radius: 2.5rem;
            box-shadow: var(--shadow-3);
            button {
              background: transparent;
              border: none;
              outline: none;
              margin-left: 0.5rem;
              font-size: 1.2rem;
              cursor: pointer;
              svg {
                color: red;
              }
            }
          }
        }
      }
      .check-container {
        margin-right: auto;
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
