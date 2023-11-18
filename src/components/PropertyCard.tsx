import styled from 'styled-components';
import { TProperty, altImage } from '../redux/features/property/propertySlice';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/utils';
import { FaArrowRight } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { HiMiniBuildingOffice } from 'react-icons/hi2';
import { GiIsland } from 'react-icons/gi';
const PropertyCard = ({
  _id,
  images,
  price,
  title,
  adress,
  category,
  type,
  acreage,
  area,
  town,
  bedrooms,
  bathrooms,
}: Partial<TProperty>) => {
  return (
    <PropertyCardContainer>
      <div className="card-header">
        <img src={(images as altImage)[0].url} alt={title} />
      </div>
      <div className="card-body">
        <div className={`type-container ${type}`}>
          <p>For {type === 'rent' ? 'rent' : 'sale'}</p>
        </div>
        <p className="category">
          <span className="category-icon">
            {category === 'residential' ? (
              <FaHome />
            ) : category === 'land' ? (
              <GiIsland />
            ) : (
              <HiMiniBuildingOffice />
            )}
          </span>
          {category}
        </p>
        <h3>{title}</h3>
        <h5>
          {formatPrice(price!)} {type === 'rent' && '/Mo'}
        </h5>

        <p>{adress}</p>
        <p>{town}</p>
        <div className="property-details">
          {acreage && (
            <div className="property-detail">
              <p>Acreage: {acreage} (acres)</p>
            </div>
          )}
          {area && (
            <div className="property-detail">
              <p>
                {' '}
                Area: {area}(M <sup>2</sup>)
              </p>
            </div>
          )}
          {bedrooms && (
            <div className="property-detail">
              <p>Bedrooms: {bedrooms} </p>
            </div>
          )}
          {bathrooms && (
            <div className="property-detail">
              <p>Bathrooms: {bathrooms}</p>
            </div>
          )}
        </div>
      </div>
      <div className="card-footer">
        <Link
          to={`/properties/${_id}`}
          className={type === 'buy' ? 'button btn-blue ' : 'button'}
        >
          Details
          <span className="button-icon">
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </PropertyCardContainer>
  );
};
export default PropertyCard;

const PropertyCardContainer = styled.div`
  width: 100%;
  background: transparent;
  overflow: hidden;
  .card-header {
    width: 100%;
    height: 16rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .card-body {
    padding: 0.5rem 2rem;
    position: relative;
    margin-top: -2rem;
    .type-container {
      width: 15rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 0.75rem;
      p {
        color: var(--clr-white);
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 0;
        text-transform: capitalize;
        padding-left: 1rem;
      }
    }
    .rent {
      background: var(--orange);
    }
    .buy {
      background: var(--blue-700);
    }
    .category {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      font-size: 1rem;
      .category-icon {
        font-size: 1.3rem;
        background: transparent;
        margin-right: 0.5rem;
      }
    }
    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      text-transform: capitalize;
    }
    h5 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1rem;
      text-transform: capitalize;
    }
    p {
      font-size: 0.8rem;
      margin-bottom: 1rem;
      text-transform: capitalize;
    }
    .property-details {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      .property-detail {
        p {
          font-size: 0.8rem;
        }
      }
    }
  }
  .card-footer {
    padding: 1rem 1.5rem;
    padding-top: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .button {
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
    }
  }
`;
