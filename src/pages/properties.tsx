import { useSearchParams } from 'react-router-dom';
const Properties = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const type = searchParams.get('type');
  console.log(type, category);

  return <div>properties</div>;
};
export default Properties;
