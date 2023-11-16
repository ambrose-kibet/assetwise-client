import styled from 'styled-components';
import { DBPost } from '../redux/features/blog/blogSlice';
import SingleStory from './SingleStory';
import { useState } from 'react';
const Popular = ({ posts }: { posts: DBPost[] }) => {
  const [showAll, setshowAll] = useState(false);
  return (
    <PopularContainer>
      <div className="popular-hero">
        <div className="intro">
          <h3>Our Other Recent Articles</h3>
          <p>
            The latest insights, tips and advice to help you in property
            ownership
          </p>
        </div>
        <button type="button" onClick={() => setshowAll(!showAll)}>
          {showAll ? 'show less' : 'read all articles'}
        </button>
      </div>
      <div className="popular-stories">
        {(showAll &&
          posts
            .slice(3, 6)
            .map((post) => <SingleStory key={post._id} {...post} />)) ||
          posts
            .slice(3)
            .map((post) => <SingleStory key={post._id} {...post} />)}
      </div>
    </PopularContainer>
  );
};
export default Popular;

const PopularContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  padding: 1rem;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  background-color: transparent;
  .popular-hero {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .intro {
      max-width: 400px;
      h3 {
        color: var(--orange);
        margin-bottom: 0.5rem;
      }
      p {
        color: var(--blue-700);
      }
    }
    button {
      height: fit-content;
      margin: auto 0;
      padding: 0.5rem 1rem;
      border-radius: 2.5rem;
      border: 1px solid var(--blue-700);
      background-color: transparent;
      color: var(--blue-700);
      text-transform: capitalize;
      font-size: 0.75rem;
      transition: var(--transition);
      &:hover {
        background-color: var(--blue-700);
        color: var(--clr-white);
      }
    }
  }
  .popular-stories {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
`;
