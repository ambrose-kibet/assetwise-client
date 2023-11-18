import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RootState } from '../redux/store';
import Loading from '../components/spinnner';
import { useEffect } from 'react';
import { getSingleBlog } from '../redux/features/blog/blogSlice';
import styled from 'styled-components';
import FeaturedBlogs from '../components/FeaturedBlogs';

const SingleBlog = () => {
  const { id } = useParams<{ id: string }>();
  const { post, isLoading, posts } = useAppSelector(
    (state: RootState) => state.blog
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getSingleBlog(id));
    }
  }, [dispatch, id]);

  if (isLoading) {
    return (
      <SingleBlogContainer>
        <div className="container">
          <Loading />
        </div>
      </SingleBlogContainer>
    );
  }
  return (
    <SingleBlogContainer>
      <div className="container">
        <Link to="/blog" type="button" className="link">
          <span className="link-icon">
            <FaArrowLeft />
          </span>
          Back to our blog
        </Link>
        <div className="story-container">
          <h1>{post?.title}</h1>

          <div className="story">
            <img src={post.coverImage} alt={post.title} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
        {(posts.length && (
          <>
            <h3>Top Stories</h3>
            <FeaturedBlogs flagId={id} />
          </>
        )) ||
          null}
      </div>
    </SingleBlogContainer>
  );
};
export default SingleBlog;

const SingleBlogContainer = styled.section`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 0.5rem;
    min-height: 65vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .link {
      display: flex;
      align-items: center;
      color: var(--orange);
      font-size: 1.2rem;
      text-decoration: none;
      margin-bottom: auto;

      line-height: 1.5;
      .link-icon {
        font-size: 1rem;
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
      }
    }

    .story-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 800px;
      margin: 0 auto;

      h1 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      .story {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 300px;
          object-fit: cover;
          margin-bottom: 1rem;
          border-radius: 5px;
        }
      }
    }
  }
`;
