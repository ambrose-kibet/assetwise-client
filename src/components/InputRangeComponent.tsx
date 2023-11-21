import styled from 'styled-components';

type InputRangeComponentProps = {
  min: number;
  max: number;
  name: string;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const InputRangeComponent = ({
  min,
  max,
  name,
  value,
  handleChange,
}: InputRangeComponentProps) => {
  return (
    <InputRangeComponentContainer
      name={name}
      type="range"
      min={min || 0}
      max={max}
      value={value}
      onChange={handleChange}
    />
  );
};
export default InputRangeComponent;

const InputRangeComponentContainer = styled.input`
  width: 100%;
  height: 2rem;
  background: #fff;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  outline: none;
  padding: 0.5rem;
  margin: 0.5rem 0;
  &:focus {
    border: 1px solid #000;
  }
`;
