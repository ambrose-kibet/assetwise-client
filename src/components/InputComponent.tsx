import styled from 'styled-components';
type InputComponentProps = {
  type: string;
  name: string;
  placeholder: string;
  value: string | number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputComponent = ({
  type,
  name,
  placeholder,
  value,
  handleChange,
}: InputComponentProps) => {
  return (
    <Input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
    />
  );
};
export default InputComponent;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--color-primary);
  background: transparent;
  margin-bottom: 1rem;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--color-gray);
  &::placeholder {
    color: var(--color-primary);
    text-transform: capitalize;
    color: var(--color-gray);
    letter-spacing: 0.1rem;
  }
`;
