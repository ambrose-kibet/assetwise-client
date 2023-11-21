import styled from 'styled-components';
import { setFilters } from '../redux/features/property/propertySlice';
import { useAppDispatch } from '../redux/hooks';
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi';

const Pagination = ({ pages, page }: { pages: number; page: number }) => {
  const array = Array.from(Array(pages).keys());
  const dispatch = useAppDispatch();

  const handleLeft = () => {
    if (page === 1) return;
    dispatch(setFilters({ name: 'page', value: Number(page - 1) }));
  };
  const handleRight = () => {
    if (page === pages) return;
    dispatch(setFilters({ name: 'page', value: Number(page + 1) }));
  };
  return (
    <PaginationContainer>
      <button onClick={handleLeft}>
        <FiChevronsLeft />
      </button>
      {array.map((item, index) => {
        return (
          <button
            key={index}
            className={page === item + 1 ? 'active' : ''}
            onClick={() =>
              dispatch(setFilters({ name: 'page', value: Number(item + 1) }))
            }
          >
            {item + 1}
          </button>
        );
      })}
      <button onClick={handleRight}>
        <FiChevronsRight />
      </button>
    </PaginationContainer>
  );
};
export default Pagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 0.25rem;
  button {
    border: none;
    display: flex;
    align-items: center;
    background: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    transition: var(--transition);

    color: var(--blue-700);
    &.active {
      background: var(--blue-700);
      color: var(--clr-white);
    }
  }
`;
