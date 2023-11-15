type Props = {
  value: string;
  name: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};
const FormTextArea = ({ value, handleChange, name, placeholder }: Props) => {
  return (
    <div className="form-input-div">
      <textarea
        placeholder={placeholder}
        name={name}
        value={value}
        className="form-control textarea"
        onChange={(e) => handleChange(e)}
      ></textarea>
    </div>
  );
};
export default FormTextArea;
