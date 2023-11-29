import { getAllProperties } from '../redux/features/property/propertySlice';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import PropertyCard from './PropertyCard';
import Loading from './spinnner';
const PropertiesComponent = () => {
  const {
    properties,
    isLoading,
    filters: {
      category,
      type,
      bathrooms,
      bedrooms,
      price,
      acreage,
      county,
      adress,
      page,
      limit,
    },
  } = useAppSelector((state: RootState) => state.property);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const debounceId = setTimeout(() => {
      const filterUrl =
        `?category=${category}&type=${
          type === 'sale' ? 'buy' : type
        }&county=${county}&adress=${adress}&page=${page}&limit=${limit}&numericFilters=` +
        (bathrooms !== 'all'
          ? bathrooms === '6+'
            ? ',bathrooms>=6'
            : `,bathrooms=${Number(bathrooms)}`
          : '') +
        (bedrooms !== 'all'
          ? bedrooms === '6+'
            ? ',bedrooms>=6'
            : `,bedrooms=${Number(bedrooms)}`
          : '') +
        (price !== 0 ? `,price<=${price}` : '') +
        (acreage !== 0 ? `,acreage<=${acreage}` : '');

      dispatch(getAllProperties(filterUrl));
    }, 900);

    return () => clearTimeout(debounceId);
  }, [
    dispatch,
    category,
    type,
    bathrooms,
    bedrooms,
    county,
    adress,
    page,
    limit,
    price,
    acreage,
  ]);

  if (isLoading) {
    return (
      <div className="properties">
        <Loading />
      </div>
    );
  }
  if (properties.length === 0) {
    return (
      <div className="properties">
        <h4>No properties Match Your Criteria</h4>
      </div>
    );
  }
  return (
    <div className="properties">
      {properties.map((property) => (
        <PropertyCard key={property._id} {...property} />
      ))}
    </div>
  );
};
export default PropertiesComponent;
