import styled from 'styled-components';
import InputComponent from './InputComponent';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  addCategory,
  deleteCategory,
  getCategories,
  handleInputChange,
  updateCategory,
} from '../redux/features/blog/categorySlice';
import { RootState } from '../redux/store';
import { MdCreate } from 'react-icons/md';
import Modal from './Modal';
import SingleCategory from './SingleCategory';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
const Categories = () => {
  const dispatch = useAppDispatch();
  const { localCategory, flagId, categories, isEditing } = useAppSelector(
    (state: RootState) => state.category
  );
  const { isModalOpen } = useAppSelector((state: RootState) => state.nav);
  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(handleInputChange(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (localCategory.trim() === '')
      return toast.error('Category cannot be empty');
    if (isEditing) {
      dispatch(updateCategory({ _id: flagId, name: localCategory }));
    } else {
      dispatch(addCategory({ name: localCategory }));
    }
  };
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <CategoriesContainer>
      {isModalOpen && (
        <Modal
          _id={flagId}
          action={deleteCategory}
          info="Deleting this category will remove all posts belonging to this category"
        />
      )}
      <form onSubmit={handleSubmit}>
        <InputComponent
          name="category"
          value={localCategory}
          handleChange={handleChanges}
          placeholder="Add category"
          type="text"
        />
        <button type="submit" className="button">
          {isEditing ? 'Edit' : 'Add'} Category
          <span className="button-icon">
            <MdCreate />
          </span>
        </button>
      </form>
      <div className="categories-container">
        {(categories.length &&
          categories.map((category) => {
            return <SingleCategory {...category} key={category._id} />;
          })) || <h5>No categories yet</h5>}
      </div>
    </CategoriesContainer>
  );
};
export default Categories;

const CategoriesContainer = styled.div`
  padding: 1rem;
  background: var(--clr-white);
  height: fit-content;
  border-radius: var(--radius);
  box-shadow: var(--shadow-3);
  form {
    .button {
      color: var(--blue-700);

      &:hover {
        background: var(--orange);
        color: var(--clr-white);
      }
      .button-icon {
        margin-left: 0.5rem;
      }
    }
  }
`;
