import styled from 'styled-components';

type Props = {
  name: string;
  value: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const CheckBoxInput = ({ name, value, handleChange }: Props) => {
  return (
    <CheckBoxInputContainer className="check-container">
      <label htmlFor="title">{name}</label>
      <input
        type="checkbox"
        name={name}
        checked={value as unknown as boolean}
        onChange={(e) => handleChange(e)}
      />
    </CheckBoxInputContainer>
  );
};
export default CheckBoxInput;

const CheckBoxInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 1rem 0;
  label {
    margin-right: 1rem;
    text-transform: capitalize;
  }
  input {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.25rem;
  }
`;
