type Props = {
  value: string;
  name: string;
  placeholder: string;
  handleChange: ({ name, value }: { name: string; value: string }) => void;
};
const FormTextArea = ({ value, handleChange, name, placeholder }: Props) => {
  return (
    <div className="form-input-div">
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        className="form-control textarea"
        onChange={(e) =>
          handleChange({ name: e.target.name, value: e.target.value })
        }
      ></textarea>
    </div>
  );
};
export default FormTextArea;
