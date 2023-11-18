import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import PropertyCard from '../components/PropertyCard';
import { useEffect } from 'react';
import {
  TProperty,
  getAllProperties,
} from '../redux/features/property/propertySlice';
import Loading from '../components/spinnner';
const Properties = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const type = searchParams.get('type');
  console.log(type, category);
  const { properties, isLoading } = useAppSelector((state) => state.property);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllProperties());
  }, [dispatch]);
  return (
    <PropertyCardContainer>
      <div className="container">
        <h2 className="section-title">
          Our <span>Properties</span>
        </h2>
        <div className="filters"></div>
        {(isLoading && <Loading />) || (
          <div className="properties">
            {properties.map((property: Partial<TProperty>) => (
              <PropertyCard key={property._id} {...property} />
            ))}
          </div>
        )}
      </div>
    </PropertyCardContainer>
  );
};
export default Properties;

const PropertyCardContainer = styled.section`
  .container {
    min-height: 58vh;
    padding: 0.5rem;
  }
  .properties {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 0.25rem;
    margin-top: 2rem;
  }
  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }
`;
