type Props = {
  type: string;
  placeholder: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};
const FormInputComponent = ({
  type,
  placeholder,
  value,
  handleChange,
  name,
}: Props) => {
  return (
    <div className="form-input-div">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="form-control"
        value={value}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};
export default FormInputComponent;
