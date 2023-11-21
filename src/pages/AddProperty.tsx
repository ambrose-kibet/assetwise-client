import styled from 'styled-components';
import AddPropertyForm from '../components/AddPropertyForm';
import { useSearchParams } from 'react-router-dom';
import {
  deleteImage,
  getSingeProperty,
  setEditing,
  setFlagId,
} from '../redux/features/property/propertySlice';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import Modal from '../components/Modal';
const AddProperty = () => {
  const [searchParams] = useSearchParams();
  const propertyId = searchParams.get('propertyId');
  const dispatch = useAppDispatch();
  const { isModalOpen } = useAppSelector((state: RootState) => state.nav);
  const { isEditing } = useAppSelector((state: RootState) => state.property);
  const { imageFlagId: flagId } = useAppSelector(
    (state: RootState) => state.property
  );
  useEffect(() => {
    if (propertyId) {
      dispatch(setEditing(true));
      dispatch(setFlagId(propertyId));
      dispatch(getSingeProperty(propertyId));
    }
  }, [dispatch, propertyId]);
  return (
    <AddPropertyContainer>
      {(isModalOpen && (
        <Modal
          _id={flagId}
          info="You are about to delete this Image"
          action={deleteImage}
        />
      )) ||
        null}
      <div className="container">
        <h2 className="section-title">
          {isEditing ? 'Edit' : 'Add'} <span>Property</span>
        </h2>
        <AddPropertyForm />
      </div>
    </AddPropertyContainer>
  );
};
export default AddProperty;
const AddPropertyContainer = styled.section``;
