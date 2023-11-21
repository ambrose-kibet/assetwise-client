import { FaTimes } from 'react-icons/fa';
import {
  altImage,
  setImagesFlagId,
} from '../redux/features/property/propertySlice';
import styled from 'styled-components';
import { openModal } from '../redux/features/nav/navSlice';
import { useAppDispatch } from '../redux/hooks';
import { BiImageAdd } from 'react-icons/bi';

type EditImagesProps = {
  images: altImage;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const EditImages = ({ images, handleChange }: EditImagesProps) => {
  const dispatch = useAppDispatch();
  const promtDelete = (_id: string) => {
    dispatch(setImagesFlagId(_id));
    dispatch(openModal());
  };
  return (
    <EditImagesContainer>
      <div className="image-container">
        <label className="button" htmlFor="image">
          Add Image
          <span className="button-icon">
            <BiImageAdd />
          </span>
        </label>
        <input
          type="file"
          placeholder="Please provide at least 3 images of the property"
          className=""
          id="image"
          multiple
          onChange={handleChange}
          style={{ display: 'none' }}
        />
      </div>

      <div>
        {images.map((image) => {
          return (
            <div key={image._id}>
              <img src={image.url} alt={image._id} />
              <button onClick={() => promtDelete(image._id)} type="button">
                <FaTimes />
              </button>
            </div>
          );
        })}
      </div>
    </EditImagesContainer>
  );
};
export default EditImages;
const EditImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  .image-container {
    label {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
      span {
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
  div {
    display: flex;
    flex-wrap: wrap;
    div {
      position: relative;
      margin: 0.5rem;
      img {
        width: 100px;
        height: 100px;
        object-fit: cover;
      }
      button {
        position: absolute;
        top: 0;
        right: 0;
        background: transparent;
        border: none;
        color: red;
        font-size: 1.5rem;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
