type SingleCategoryProps = {
  _id: string;
  name: string;
};
import { FaPen, FaTrash } from 'react-icons/fa';
import { useAppDispatch } from '../redux/hooks';
import {
  handleInputChange,
  setFlagId,
  setIsEditing,
} from '../redux/features/blog/categorySlice';
import { openModal, setModalInfo } from '../redux/features/nav/navSlice';
import styled from 'styled-components';
const SingleCategory = ({ _id, name }: SingleCategoryProps) => {
  const dispatch = useAppDispatch();
  const handleEdit = () => {
    dispatch(setIsEditing(true));
    dispatch(handleInputChange(name));
    dispatch(setFlagId(_id));
  };
  const handleDelete = () => {
    dispatch(setFlagId(_id));
    dispatch(setModalInfo('category'));
    dispatch(openModal());
  };
  return (
    <CategoriesContainer>
      <h5>{name}</h5>
      <div className="btn-container">
        <button className="btn" onClick={handleEdit}>
          <FaPen />
        </button>
        <button className="btn delete-btn" onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
    </CategoriesContainer>
  );
};
export default SingleCategory;

const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  h3 {
    text-transform: capitalize;
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 10rem;
  }
  .btn {
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    color: var(--orange);
    font-size: 1.5rem;
    transition: var(--transition);
    &:hover {
      color: var(--blue-700);
    }
  }
  .delete-btn {
    color: red;
  }
  .btn-icon {
    margin-left: 0.5rem;
  }
  @media screen and (max-width: 768px) {
    .btn-container {
      width: 8rem;
    }
  }
  @media screen and (max-width: 576px) {
    .btn-container {
      width: 6rem;
    }
  }
`;
