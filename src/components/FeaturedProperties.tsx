import Slider from 'react-slick';
import styled from 'styled-components';
import { featuredProperties } from '../utils/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FeaturedCard from './FeaturedCard';
const FeaturedProperties = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <FeaturedContainer>
      <Slider {...settings}>
        {featuredProperties.map((property) => (
          <FeaturedCard key={property.id} {...property} />
        ))}
      </Slider>
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
