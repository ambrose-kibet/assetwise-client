import styled from 'styled-components';
import { AiFillEye } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
type Props = {
  _id: string;
  coverImage: string;
  title: string;
  description: string;
};

const MySingleStoryComponent = ({ _id, coverImage, title }: Props) => {
  return (
    <MySingleStoryComponentContainer>
      <div className="img-container">
        <img src={coverImage} alt={title} />
      </div>
      <div className="body-container">
        <h4>{title.length > 30 ? title.substring(0, 30) : title}...</h4>
        <div className="controls-container">
          <Link to={`/blog/${_id}`}>
            <AiFillEye />
          </Link>
          <Link to={'/admin/blog'}>
            <BsPencilSquare />
          </Link>
          <button type="button">
            <FaTrash />
          </button>
        </div>
      </div>
    </MySingleStoryComponentContainer>
  );
};
export default MySingleStoryComponent;

const MySingleStoryComponentContainer = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  width: 100%;
  margin: 0 auto;
  padding: 0.25rem;
  background-color: var(--clr-white);
  border-radius: var(--radius);
  .img-container {
    width: 100%;
    height: 200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--radius);
    }
  }
  .body-container {
    padding: 0.5rem;
    h4 {
      margin: 0.25rem 0;
      text-transform: capitalize;
      text-align: left !important;
    }
    .controls-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        border: none;
        background: transparent;
        font-size: 1.5rem;
        color: var(--blue-700);
        cursor: pointer;
        &:hover {
          color: var(--blue-700);
        }
      }
    }
  }
  @media screen and (min-width: 896px) {
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    .img-container {
      height: 100%;
    }
    .body-container {
      padding: 1rem;
      h4 {
        margin: 0.25rem 0;
        text-transform: capitalize;
        text-align: left !important;
      }
      .controls-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        a,
        button {
          border: none;
          background: transparent;
          text-decoration: none;
          font-size: 1.5rem;
          color: var(--orange);
          cursor: pointer;
          &:hover {
            color: var(--blue-700);
          }
        }
        button {
          color: red;
          &:hover {
            color: var(--orange);
          }
        }
      }
    }
  }
`;