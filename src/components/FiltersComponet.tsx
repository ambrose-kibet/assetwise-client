import styled from 'styled-components';
import InputComponent from './InputComponent';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import SelectComponent from './SelectComponent';
import {
  bathroomFilters,
  bedroomFilters,
  counties,
  propertyCategories,
  propertyTypes,
} from '../utils/data';
import InputRangeComponent from './InputRangeComponent';
import {
  clearFilters,
  setFilters,
} from '../redux/features/property/propertySlice';
import { formatPrice } from '../utils/utils';

const FiltersComponet = () => {
  const {
    filters: {
      category,
      type,
      price,
      acreage,
      bedrooms,
      bathrooms,
      county,
      adress,
    },
    minPrice,
    maxPrice,
    minAcreage,
    maxAcreage,
  } = useAppSelector((state) => state.property);
  const dispatch = useAppDispatch();
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    dispatch(setFilters({ name, value }));
  };

  return (
    <FiltersComponetContainer>
      <div className="form-group">
        <label htmlFor="title">Search by Location</label>
        <InputComponent
          value={adress!}
          name="adress"
          placeholder="Search address"
          handleChange={handleChange}
          type="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">County</label>
        <SelectComponent
          value={county}
          name="county"
          handleChange={handleChange}
          options={[{ _id: 'all', name: 'All' }, ...counties]}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">type</label>
        <SelectComponent
          value={type}
          name="type"
          handleChange={handleChange}
          options={[{ _id: 'all', name: 'All' }, ...propertyTypes]}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Price</label>
        <p> {`<= ${formatPrice(price === 0 ? maxPrice : price)}`} </p>
        <InputRangeComponent
          min={minPrice}
          max={maxPrice}
          name="price"
          handleChange={handleChange}
          value={price as number}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">property Category</label>
        <SelectComponent
          value={category}
          name="category"
          handleChange={handleChange}
          options={[{ _id: 'all', name: 'All' }, ...propertyCategories]}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Bedrooms</label>
        <SelectComponent
          value={bedrooms}
          name="bedrooms"
          handleChange={handleChange}
          options={bedroomFilters}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Acreage</label>
        {(acreage && <p> {`<= ${acreage}`} acres</p>) || (
          <p> {`<= ${maxAcreage}`} acres</p>
        )}
        <InputRangeComponent
          min={minAcreage}
          max={maxAcreage}
          name="acreage"
          value={acreage as number}
          handleChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title"> Bathrooms</label>
        <SelectComponent
          value={bathrooms}
          name="bathrooms"
          handleChange={handleChange}
          options={bathroomFilters}
        />
      </div>
      <div className="update-container">
        <button
          className="button btn-blue"
          onClick={() => dispatch(clearFilters())}
        >
          Clear Filters
        </button>
      </div>
    </FiltersComponetContainer>
  );
};
export default FiltersComponet;

const FiltersComponetContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.25rem;
  background: var(--clr-white);
  padding: 1rem;
  border-radius: var(--radius);
  box-shadow: var(--shadow-1);
  .form-group {
    margin-bottom: 1rem;
  }
  label {
    display: block;

    font-size: 1.2rem;
    color: var(--blue-600);
    text-transform: capitalize;
  }
  .form-control {
    width: 100%;
    padding: 1rem 1.5rem;
    background: transparent;
    margin-bottom: 1rem;
    border: none;
    outline: none;

    &::placeholder {
      text-transform: capitalize;
      color: var(--color-gray);
      letter-spacing: 0.1rem;
    }
  }
  .form-control:focus {
    border-bottom: 1px solid var(--orange);
  }
  .update-container {
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      letter-spacing: 0.2rem;
      padding-right: 35px;
    }
  }
`;
