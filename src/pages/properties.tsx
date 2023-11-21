import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { useEffect } from 'react';
import {
  clearFilters,
  deleteProperty,
  setFilters,
} from '../redux/features/property/propertySlice';

import FiltersComponet from '../components/FiltersComponet';
import PropertiesComponent from '../components/PropertiesComponent';
import Pagination from '../components/Pagination';
import { RootState } from '../redux/store';
import Modal from '../components/Modal';
const Properties = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const type = searchParams.get('type');
  const {
    filters: { page },
    pages,
    flagId,
  } = useAppSelector((state: RootState) => state.property);
  const { isModalOpen } = useAppSelector((state: RootState) => state.nav);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(clearFilters());
    if (category) {
      dispatch(setFilters({ name: 'category', value: category }));
    }
    if (type) {
      if (type === 'sale') {
        dispatch(setFilters({ name: 'type', value: 'buy' }));
      } else if (type === 'rent') {
        dispatch(setFilters({ name: 'type', value: type }));
      }
    }
  }, [dispatch, category, type]);
  return (
    <PropertyCardContainer>
      {(isModalOpen && (
        <Modal
          _id={flagId}
          info="You are about to delete this property"
          action={deleteProperty}
        />
      )) ||
        null}
      <div className="container">
        <h2 className="section-title">
          Our <span>Properties</span>
        </h2>
        <FiltersComponet />
        <PropertiesComponent />
        {pages > 1 && <Pagination page={page} pages={pages} />}
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
  }
`;
