import styled from 'styled-components';
import AddPropertyForm from '../components/AddPropertyForm';

const AddProperty = () => {
  return (
    <AddPropertyContainer>
      <div className="container">
        <h2 className="section-title">
          Add <span>Property</span>
        </h2>
        <AddPropertyForm />
      </div>
    </AddPropertyContainer>
  );
};
export default AddProperty;
const AddPropertyContainer = styled.section``;
