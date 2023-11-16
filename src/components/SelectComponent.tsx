import { Category } from '../redux/features/blog/categorySlice';

type Props = {
  options: Category[];
  name: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};
const SelectComponent = ({ name, handleChange, options, value }: Props) => {
  return (
    <select
      className="form-control"
      value={value}
      name={name}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e)}
    >
      {options.map(({ _id: id, name }) => (
        <option value={id} key={id}>
          {name}
        </option>
      ))}
    </select>
  );
};
export default SelectComponent;
