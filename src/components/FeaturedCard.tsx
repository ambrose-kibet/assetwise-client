import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdBedroomChild } from 'react-icons/md';
import { FaBath } from 'react-icons/fa';
import { GiIsland } from 'react-icons/gi';

type Props = {
  id: number;
  image: string;
  price: number;
  address: string;
  county: string;
  town: string;
  bedrooms?: number;
  bathrooms?: number;
  acreage: number;
  amenities?: string[];
};
const FeaturedCard = (props: Props) => {
  return (
    <FeaturedContainer>
      <div className="card-image">
        <img src={props.image} alt="featured property" />
      </div>
      <div className="card-content">
        <h3>{props.address}</h3>
        <div className="info-container">
          <p>
            <span className="label">Kes:</span>
            {props.price}
          </p>
          <p>
            <span className="label">County:</span>
            {props.county}
          </p>
          <p>
            <span className="label">City/Town:</span>
            {props.town}
          </p>
          {props.amenities && (
            <p className="amenities">
              <span className="label">Ammenities:</span>
              {props.amenities?.map((item, index) => (
                <span key={index}>{item}, </span>
              ))}
            </p>
          )}
        </div>
        <div className="items-container">
          <p>
            <span className="label icon">
              <GiIsland />
            </span>
            {props.acreage}
          </p>
          {props.bedrooms && (
            <p>
              <span className="label icon">
                <MdBedroomChild />
              </span>
              {props.bedrooms}
            </p>
          )}
          {props.bathrooms && (
            <p>
              <span className="label icon">
                <FaBath />
              </span>
              {props.bathrooms}
            </p>
          )}
        </div>

        <Link to={`/properties/${props.id.toString()}`}>View Property</Link>
      </div>
    </FeaturedContainer>
  );
};
export default FeaturedCard;

const FeaturedContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0.25rem;
  width: 100%;

  padding: 1rem;
  background-color: var(--clr-white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  text-decoration: none;
  &:hover {
    box-shadow: var(--shadow-3);
  }
  .card-image {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--radius);
      margin: 0 auto;
    }
  }
  .card-content {
    h3 {
      color: var(--blue-700);
      margin: 0.25rem 0;
      text-align: left;
    }

    .info-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      flex-wrap: wrap;
    }
    .items-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
    }
    p {
      color: var(--blue-700);
      text-transform: capitalize;
      margin-right: 0.5rem;
    }
    .label {
      font-weight: bold;
      margin-right: 0.5rem;
      letter-spacing: 0.1rem;
    }
    .icon {
      margin-right: 0.5rem;
      font-size: 1.2rem;
    }
    a {
      color: var(--clr-white);
      background-color: var(--orange);
      padding: 0.5rem 1rem;
      border-radius: var(--radius);
      margin-bottom: 1rem;
      margin-top: auto;
      text-decoration: none;
      display: inline-block;
      transition: var(--transition);
      text-align: center;
      width: 100%;
      letter-spacing: 0.1rem;
      &:hover {
        background-color: var(--clr-white);
        color: var(--orange);
        border: 1px solid var(--orange);
        font-weight: bold;
      }
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 3fr 2fr;
    gap: 1rem;
    padding-bottom: 2rem;
    padding-top: 2rem;
    .card-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      a {
        margin-top: auto;
      }
    }
    .info-container {
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;
