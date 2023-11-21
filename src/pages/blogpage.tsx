import styled from 'styled-components';
import { RootState } from '../redux/store';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import Loading from '../components/spinnner';
import { useEffect } from 'react';
import { getPosts } from '../redux/features/blog/blogSlice';

import SingleStory from '../components/SingleStory';
import Popular from '../components/Popular';

const Blogpage = () => {
  const { isLoading, posts } = useAppSelector((state: RootState) => state.blog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const [first, second, third] = posts;

  if (isLoading) {
    return (
      <BlogPageContainer>
        <div className="container">
          <Loading />
        </div>
      </BlogPageContainer>
    );
  }
  return (
    <BlogPageContainer>
      <div className="container">
        <h2 className="section-title">
          Our <span>Blog</span>
        </h2>
        {posts.length > 3 && (
          <div className="cover-stories">
            <div className="left-stories">
              {second && <SingleStory {...second} />}
              {third && <SingleStory {...third} />}
            </div>
            <div className="main-story">
              {first && <SingleStory {...first} />}
            </div>
          </div>
        )}
        <Popular posts={posts} />
      </div>
    </BlogPageContainer>
  );
};
export default Blogpage;

const BlogPageContainer = styled.section`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 0.5rem;
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .section-title {
      text-align: center;
      margin-bottom: 1rem;
    }

    .cover-stories {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-bottom: 1rem;
      .left-stories {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        .story {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          .story-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--radius);
          }
          .story-content {
            h3 {
              color: var(--blue-700);
              margin-bottom: 0.5rem;
            }
            p {
              color: var(--blue-700);
            }
          }
        }
      }
      .main-story {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
        .story {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          .story-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: var(--radius);
          }
          .story-content {
            h3 {
              color: var(--blue-700);
              margin-bottom: 0.5rem;
            }
            p {
              color: var(--blue-700);
            }
          }
        }
      }
      @media screen and (min-width: 896px) {
        grid-template-columns: 1fr 2fr;
        .left-stories {
          display: grid;
        }
      }
    }
  }
`;
