/* eslint-disable @typescript-eslint/ban-ts-comment */
import { altImage } from '../redux/features/property/propertySlice';
import { useState } from 'react';
import styled, { css } from 'styled-components';
type Props = { images: altImage };
const ImagesComponent = ({ images }: Props) => {
  const [mainImage, setMainImage] = useState(0);
  return (
    //@ts-ignore
    <ImageComponentContainer grids={images.length}>
      <div className="main-image">
        <img src={images[mainImage].url} alt={images[mainImage]._id} />
      </div>
      <div className="images">
        {images.map((image, index) => (
          <div
            className={index === mainImage ? 'image active' : 'image'}
            key={index}
          >
            <img
              src={image.url}
              alt={image._id}
              onClick={() => setMainImage(index)}
            />
          </div>
        ))}
      </div>
    </ImageComponentContainer>
  );
};
export default ImagesComponent;

const ImageComponentContainer = styled.div`
  position: relative;
  .main-image {
    width: 100%;
    height: 500px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .images {
    display: grid;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    grid-template-columns: ${(props) =>
      css`repeat(${
        //@ts-ignore
        props.grids as number
      }, 1fr)`}; // Use css helper to handle the prop
    grid-gap: 0;
    margin-top: 0;
    .image {
      width: 100%;
      height: 100px;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .active {
      border: 4px solid var(--orange);
    }
  }
`;
