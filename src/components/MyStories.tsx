import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import MySingleStoryComponent from './MySingleStoryComponent';
import Loading from './spinnner';
import { useEffect } from 'react';
import {
  deleteBlog,
  getMyPosts,
  updateFilters,
} from '../redux/features/blog/blogSlice';
import Modal from './Modal';

const MyStories = () => {
  const {
    filters: { currentPage, pages, status },
    myPosts,
    isLoading,
    flagId,
  } = useAppSelector((state: RootState) => state.blog);
  const { isModalOpen } = useAppSelector((state: RootState) => state.nav);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMyPosts({ page: currentPage, status }));
  }, [dispatch, currentPage, status]);

  return (
    <MyStoriesContainer>
      {isModalOpen && (
        <Modal
          _id={flagId}
          action={deleteBlog}
          info="You are about to delete this post"
        />
      )}
      <div className="stories-header">
        <button
          className={status === 'publish' ? 'active' : ''}
          type="button"
          onClick={() =>
            dispatch(updateFilters({ name: 'status', value: 'publish' }))
          }
        >
          published
        </button>
        <button
          className={status === 'draft' ? 'active' : ''}
          type="button"
          onClick={() =>
            dispatch(updateFilters({ name: 'status', value: 'draft' }))
          }
        >
          drafts
        </button>
      </div>
      <div className="stories-body">
        {isLoading ? (
          <Loading />
        ) : (
          (myPosts.length &&
            myPosts.map((post) => (
              <MySingleStoryComponent key={post._id} {...post} />
            ))) || <h5>No stories match the criteria</h5>
        )}
      </div>
      <div className="stories-footer">
        {
          // eslint-disable-next-line no-nested-ternary
          !isLoading && pages > 1 ? (
            <div className="pagination">
              <button
                type="button"
                onClick={() =>
                  dispatch(updateFilters({ name: 'currentPage', value: 'dec' }))
                }
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() =>
                  dispatch(updateFilters({ name: 'currentPage', value: 'inc' }))
                }
              >
                Next
              </button>
            </div>
          ) : null
        }
      </div>
    </MyStoriesContainer>
  );
};
export default MyStories;

const MyStoriesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  margin: 0 auto;
  padding: 0.25rem;
  .stories-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    button {
      margin-left: 0.5rem;
      padding: 1rem;
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: 3px;
      border: none;
      border-radius: 2.5rem;
      background-color: var(--clr-white);
      color: var(--blue-700);
      cursor: pointer;
      transition: var(--transition);
    }
    .active {
      background-color: var(--orange);
      color: var(--clr-white);
    }
  }
  .stories-body {
    h5 {
      text-align: center;
    }
  }
  .stories-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    button {
      margin-left: 0.5rem;
      padding: 1rem;
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: 3px;
      border: none;
      border-radius: 2.5rem;
      background-color: var(--blue-700);
      color: var(--clr-white);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background-color: var(--clr-white);
        color: var(--blue-700);
        outline: 1px solid var(--blue-700);
      }
    }
  }
`;
