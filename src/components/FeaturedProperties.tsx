import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeaturedCard from './FeaturedCard';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useEffect } from 'react';
import {
  TProperty,
  getFeaturedProperties,
} from '../redux/features/property/propertySlice';
import Loading from './spinnner';
const FeaturedProperties = () => {
  const dispatch = useAppDispatch();
  const { featuredProperties, isLoading } = useAppSelector(
    (state) => state.property
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  useEffect(() => {
    dispatch(getFeaturedProperties());
  }, [dispatch]);
  return (
    <FeaturedContainer>
      {(isLoading && <Loading />) || (
        <Slider {...settings}>
          {featuredProperties.map((property: Partial<TProperty>) => (
            <FeaturedCard key={property._id} {...property} />
          ))}
        </Slider>
      )}
    </FeaturedContainer>
  );
};
export default FeaturedProperties;

const FeaturedContainer = styled.div`
  position: relative;
  min-width: 100%;

  .slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slick-track {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .slick-dots {
    position: absolute;
    bottom: 0;
    display: flex !important;
    align-items: center;
    justify-content: center;
    li {
      button {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--blue-500);
        border: 1px solid var(--clr-white);
        &:before {
          display: none;
        }
      }
      &.slick-active {
        button {
          background-color: var(--orange);
        }
      }
    }
  }
  .slick-prev {
    left: -0.5rem;
    z-index: 1;
  }
  .slick-next {
    right: -0.5rem;
    z-index: 1;
  }
  .slick-prev:before {
    color: var(--orange);
  }
  .slick-next:before {
    color: var(--orange);
  }
  .slick-prev:before,
  .slick-next:before {
    font-size: 1.5rem;
  }
`;
