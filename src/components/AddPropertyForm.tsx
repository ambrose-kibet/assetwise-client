import styled from 'styled-components';
import InputComponent from './InputComponent';
import FormTextArea from './FormTextArea';
import SelectComponent from './SelectComponent';
import { counties, propertyCategories, propertyTypes } from '../utils/data';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import CheckBoxInput from './CheckBoxInput';
import {
  addProperty,
  handleInput,
  removeAmenity,
  uploadImages,
} from '../redux/features/property/propertySlice';
import { FaPen, FaPlus, FaTimes } from 'react-icons/fa';
import { toast } from 'react-toastify';

const AddPropertyForm = () => {
  const {
    property: {
      title,
      adress,
      category,
      county,
      description,
      featured,
      price,
      town,
      type,
      bedrooms,
      bathrooms,
      area,
      acreage,
      amenity,
      amenities,
      images,
    },
    isEditing,
    isLoading,
  } = useAppSelector((state) => state.property);
  const dispatch = useAppDispatch();
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === 'featured') {
      dispatch(
        handleInput({ name, value: (e.target as HTMLInputElement).checked })
      );
      return;
    }
    dispatch(handleInput({ name, value }));
  };
  const handleAddAmenity = () => {
    if (amenity) {
      dispatch(
        handleInput({ name: 'amenities', value: [...amenities!, amenity] })
      );
      dispatch(handleInput({ name: 'amenity', value: '' }));
    } else {
      toast.error('Please enter an amenity');
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target;
    if (input) {
      const files = input.files;
      if (!files) return;
      const listfiles = Array.from(files);
      if (files.length > 5) {
        return toast.error('You could only upload 5 images.');
      }
      if (files.length < 3) {
        return toast.error('Please provide at least 3 images of the property');
      }
      if (listfiles.some((file) => file.size > 1024 * 1024)) {
        return toast.error('Image size should not be more than 1mb');
      }
      if (listfiles.some((file) => !file.type.startsWith('image'))) {
        return toast.error('You could only upload images.');
      }
      dispatch(uploadImages(Array.from(files)));
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading) return;
    if (
      !title ||
      !adress ||
      !town ||
      !county ||
      !description ||
      !type ||
      !price ||
      !category ||
      !amenities?.length
    ) {
      return toast.error(
        'Please fill in title, description,  price, adress, town, county, type, category and amenities fields'
      );
    }
    if (category === 'residential' && (!bedrooms || !bathrooms)) {
      return toast.error('Please fill bedrooms and bathrooms fields');
    }
    if (category !== 'land' && !area) {
      return toast.error('Please fill area field');
    }
    if (category !== 'commercial' && !acreage) {
      return toast.error('Please fill acreage field');
    }
    if (!images || !images.length) {
      return toast.error('Please upload at least 3 images of the property');
    }
    if (isEditing) {
      // dispatch(editProperty())
    } else {
      dispatch(
        addProperty({
          adress,
          town,
          county,
          description,
          featured,
          price,
          title,
          type,
          category,
          bedrooms,
          bathrooms,
          area,
          acreage,
          amenities,
          images,
        })
      );
    }
  };
  return (
    <AddPropertyContainer onSubmit={handleSubmit}>
      <div className="group-one">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <InputComponent
            type="text"
            placeholder="Enter title"
            name="title"
            value={title}
            handleChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Adress</label>
          <InputComponent
            type="text"
            placeholder="Enter Adress"
            name="adress"
            value={adress}
            handleChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">City/Town</label>
          <InputComponent
            type="text"
            placeholder="Enter City/Town"
            name="town"
            value={town}
            handleChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">County</label>
          <SelectComponent
            name="county"
            options={counties}
            value={county}
            handleChange={handleChange}
          />
        </div>
        <div className="form-group">
          <CheckBoxInput
            name="featured"
            value={featured}
            handleChange={handleChange}
          />
        </div>
      </div>

      <div className="form-group text-area">
        <label htmlFor="title">Description</label>
        <FormTextArea
          name="description"
          placeholder="Enter Property description"
          value={description}
          handleChange={handleChange}
        />
      </div>
      <div className="group-one">
        <div className="form-group">
          <label htmlFor="title">Type</label>
          <SelectComponent
            name="type"
            options={propertyTypes}
            value={type}
            handleChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Price{type === 'rent' && ' Per Month'}</label>
          <InputComponent
            name="price"
            type="number"
            value={price}
            placeholder="Enter price"
            handleChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Categories</label>
          <SelectComponent
            name="category"
            options={propertyCategories}
            value={category}
            handleChange={handleChange}
          />
        </div>
        {category === 'residential' && (
          <div className="form-group">
            <label htmlFor="title">Bedrooms</label>
            <InputComponent
              name="bedrooms"
              type="number"
              value={bedrooms!}
              placeholder="Enter no of bedrooms"
              handleChange={handleChange}
            />
          </div>
        )}
        {category === 'residential' && (
          <div className="form-group">
            <label htmlFor="title">Bathrooms</label>
            <InputComponent
              name="bathrooms"
              type="number"
              value={bathrooms!}
              placeholder="Enter no of bathrooms"
              handleChange={handleChange}
            />
          </div>
        )}
        {category !== 'land' && (
          <div className="form-group">
            <label htmlFor="title">
              Area (M<sup>2</sup>)
            </label>
            <InputComponent
              name="area"
              type="number"
              value={area!}
              placeholder="size in sqauare meters"
              handleChange={handleChange}
            />
          </div>
        )}
        {category !== 'commercial' && (
          <div className="form-group">
            <label htmlFor="title">Acreage (acres)</label>
            <InputComponent
              name="acreage"
              type="number"
              value={acreage!}
              placeholder="size in sqauare meters"
              handleChange={handleChange}
            />
          </div>
        )}
      </div>
      <div className="group-two">
        <label htmlFor="title">Amenities</label>
        <div className="group-this">
          <InputComponent
            name="amenity"
            handleChange={handleChange}
            placeholder="Add amenity"
            type="text"
            value={amenity!}
          />
          <button type="button" className="button" onClick={handleAddAmenity}>
            add
            <span className="button-icon">
              <FaPlus />
            </span>
          </button>
        </div>
        <div className="amenities">
          {amenities!.map((amenity, index) => (
            <span key={index} className="amenity">
              {amenity}
              <button
                type="button"
                onClick={() => dispatch(removeAmenity(amenity))}
              >
                <FaTimes />
              </button>
            </span>
          ))}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="title">Images</label>
        {/* incase of editing  hide this then display a different one for
         displaying all images for that property and option to add more */}
        <input
          type="file"
          placeholder="Please provide at least 3 images of the property"
          className=""
          multiple
          min={3}
          max={5}
          onChange={handleImageChange}
        />
      </div>
      <button type="submit" className="button" disabled={isLoading}>
        Create Property{' '}
        <span className="button-icon">
          <FaPen />
        </span>
      </button>
    </AddPropertyContainer>
  );
};
export default AddPropertyForm;

const AddPropertyContainer = styled.form`
  padding: 0.5rem;
  .group-one {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    align-items: center;
  }
  .form-group {
    margin-bottom: 1rem;
  }
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: var(--blue-600);
  }
  .form-control {
    width: 100%;
    padding: 1rem 1.5rem;
    background: transparent;
    margin-bottom: 1rem;
    border: none;
    outline: none;
    border-bottom: 1px solid var(--color-gray);
    &::placeholder {
      text-transform: capitalize;
      color: var(--color-gray);
      letter-spacing: 0.1rem;
    }
  }
  .form-control:focus {
    border-bottom: 1px solid var(--orange);
  }
  textarea {
    width: 100%;
    padding: 1rem 1.5rem;
    min-height: 200px;
    background: transparent;
    margin-bottom: 1rem;
    border: none;
    outline: none;
    border-bottom: none;
    &::placeholder {
      text-transform: capitalize;
    }
  }
  .group-two {
    display: grid;
    .group-this {
      display: flex;
      align-items: flex-end;
      input {
        border-bottom: none;
      }
    }
    .amenities {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      .amenity {
        display: flex;
        align-items: center;
        background: var(--color-white);
        padding: 0.5rem 1rem;
        border-radius: 2.5rem;
        box-shadow: var(--shadow-3);
        button {
          background: transparent;
          border: none;
          outline: none;
          margin-left: 0.5rem;
          font-size: 1.2rem;
          cursor: pointer;
          svg {
            color: red;
          }
        }
      }
    }
  }
`;
