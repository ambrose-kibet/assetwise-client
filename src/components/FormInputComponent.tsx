type Props = {
  type: string;
  placeholder: string;
  value: string;
  handleChange: ({ name, value }: { name: string; value: string }) => void;
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
        onChange={(e) =>
          handleChange({ name: e.target.name, value: e.target.value })
        }
      />
    </div>
  );
};
export default FormInputComponent;
