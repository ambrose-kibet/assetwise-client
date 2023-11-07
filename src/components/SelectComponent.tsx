import { Category } from '../redux/features/blog/categorySlice';

type Props = {
  options: Category[];
  name: string;
  value: string;
  handleChange: ({ name, value }: { name: string; value: string }) => void;
};
const SelectComponent = ({ name, handleChange, options, value }: Props) => {
  return (
    <select
      className="form-control"
      value={value}
      name={name}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        handleChange({ name, value: e.target.value })
      }
    >
      {options.map((option) => (
        <option value={option.id} key={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
export default SelectComponent;
