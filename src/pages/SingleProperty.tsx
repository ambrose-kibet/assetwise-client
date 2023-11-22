import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Loading from '../components/spinnner';
import {
  altImage,
  getSingeProperty,
} from '../redux/features/property/propertySlice';
import { useEffect } from 'react';
import ImagesComponent from '../components/ImagesComponent';
import { formatPrice } from '../utils/utils';

const SingleProperty = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { selectedProperty, isLoading } = useAppSelector(
    (state) => state.property
  );
  useEffect(() => {
    if (id) {
      dispatch(getSingeProperty(id));
    }
  }, [dispatch, id]);
  if (isLoading) {
    return (
      <SinglePropertyCardContainer>
        <div className="container">
          <Link to="/blog" type="button" className="link">
            <span className="link-icon">
              <FaArrowLeft />
            </span>
            Back to Properties
          </Link>
          <Loading />
        </div>
      </SinglePropertyCardContainer>
    );
  }

  return (
    <SinglePropertyCardContainer>
      <div className="container">
        <Link to="/properties" type="button" className="link">
          <span className="link-icon">
            <FaArrowLeft />
          </span>
          Back to Properties
        </Link>
        {selectedProperty && (
          <>
            <h2 className="section-title">
              {selectedProperty.title} - <span>{selectedProperty.town}</span>
            </h2>
            <div className="property">
              {selectedProperty.images?.length && (
                <ImagesComponent images={selectedProperty.images as altImage} />
              )}
              <div className="content">
                <div className="desc">
                  <h4>Description</h4>
                  <p>{selectedProperty.description}</p>
                </div>
                <div className="info">
                  <h4>Property Details</h4>
                  <div className="info-details">
                    <div className="info-detail">
                      <p>Town</p>
                      <span>{selectedProperty.town}</span>
                    </div>
                    <div className="info-detail">
                      <p>County</p>
                      <span>{selectedProperty.county}</span>
                    </div>
                    <div className="info-detail">
                      <p>Adress</p>
                      <span>{selectedProperty.adress}</span>
                    </div>
                    <div className="info-detail">
                      <p>Category</p>
                      <span>{selectedProperty.category}</span>
                    </div>
                    <div className="info-detail">
                      <p>Type</p>
                      <span>
                        {selectedProperty.type === 'buy' ? 'sale' : 'rent'}
                      </span>
                    </div>
                    <div className="info-detail">
                      <p>Price</p>
                      <span>
                        {formatPrice(selectedProperty.price)}
                        {selectedProperty.type === 'rent' && '/Mo'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="additional">
                <h4>Additional information</h4>
                {(selectedProperty.acreage && (
                  <div className="info-detail">
                    <p>Acreage</p>
                    <span>{selectedProperty.acreage} (acres) </span>
                  </div>
                )) ||
                  null}
                {(selectedProperty.area && (
                  <div className="info-detail">
                    <p>Area</p>
                    <span>{selectedProperty.area} (squared meters)</span>
                  </div>
                )) ||
                  null}
                {(selectedProperty.bedrooms && (
                  <div className="info-detail">
                    <p>Bedrooms</p>
                    <span>{selectedProperty.bedrooms}</span>
                  </div>
                )) ||
                  null}
                {(selectedProperty.bathrooms && (
                  <div className="info-detail">
                    <p>Bathrooms</p>
                    <span>{selectedProperty.bathrooms}</span>
                  </div>
                )) ||
                  null}
                <div className="info-detail">
                  <p>Amenities</p>
                  {selectedProperty.amenities?.map((amenity, index) => (
                    <span key={index}>
                      {amenity}
                      {index !== selectedProperty.amenities!.length - 1 && ','}
                    </span>
                  )) || null}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </SinglePropertyCardContainer>
  );
};
export default SingleProperty;
const SinglePropertyCardContainer = styled.section`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 0.5rem;
    min-height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .link {
      display: flex;
      align-items: center;
      color: var(--orange);
      font-size: 1.2rem;
      text-decoration: none;
      margin-bottom: auto;

      line-height: 1.5;
      .link-icon {
        font-size: 1rem;
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
      }
    }
  }
  .property {
    width: 100%;
    display: grid;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    .content {
      display: grid;
      grid-template-columns: 1fr;
      align-items: center;
      .desc {
        width: 100%;
        margin-right: 2rem;
        h4 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.2rem;
          line-height: 1.5;
        }
      }
    }

    .info-details,
    .additional {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 1rem;
      .info-detail {
        display: flex;
        gap: 1rem;
        align-items: center;
        p {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 0;
        }
        span {
          text-transform: capitalize;
        }
      }
    }
    @media screen and (min-width: 768px) {
      .content {
        grid-template-columns: 2fr 1fr;
        gap: 1rem;
        .desc {
          margin-right: 0;
        }
      }
    }
  }
`;
