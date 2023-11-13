import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Type: TypeScript file
type SingleStoryProps = {
  _id: string;
  coverImage: string;
  title: string;
  description: string;
  author: {
    fullName: string;
    avatar: string;
  };
  category: {
    _id: string;
    name: string;
  };
};

const SingleStory = ({
  _id,
  author,
  category,
  coverImage,
  title,
}: SingleStoryProps) => {
  return (
    <SingleStoryContainer>
      <img src={coverImage} alt={title} />
      <div className="content">
        <h4>{category.name}</h4>
        <h3>{title}</h3>

        <div className="info-container">
          <Link to={`/blog/${_id}`} className="link">
            Read More{' '}
            <span className="link-icon">
              <FaArrowRight />
            </span>
          </Link>
          <div className="author">
            <img src={author.avatar} alt={author.fullName} />
            <p> by {author.fullName}</p>
          </div>
        </div>
      </div>
    </SingleStoryContainer>
  );
};
export default SingleStory;

const SingleStoryContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: var(--clr-white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-1);
  position: relative;
  transition: var(--transition);

  &:hover {
    box-shadow: var(--shadow-3);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    margin: 0 auto;
  }
  .content {
    padding: 0.5rem 1rem;
    background: linear-gradient(
      45deg,
      var(--blue-500),
      var(--blue-700),
      var(--blue-500)
    );
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background: transparent;
    max-width: 400px;

    h4 {
      color: var(--clr-white);
      margin-bottom: 0.5rem;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    h3 {
      color: var(--clr-white);
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }
    .info-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .link {
        color: var(--clr-white);

        text-decoration: none;
        display: flex;
        align-items: center;
        border: 1px solid var(--clr-white);
        border-radius: 2.5rem;
        padding: 0.35rem 0.75rem;
        background: #0000002f;
        .link-icon {
          font-size: 1rem;
          margin-left: 0.5rem;
          display: flex;
          align-items: center;
        }
      }
      .author {
        display: none;
        align-items: center;
        border: 1px solid var(--clr-white);
        border-radius: 2.5rem;
        padding: 0.35rem 0.75rem;
        background: #8080803e;
        img {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          margin-right: 0.5rem;
        }
        p {
          color: var(--clr-white);
          font-size: 0.8rem;
          margin: 0;
          text-transform: capitalize;
        }
      }
    }
    @media screen and (min-width: 1024px) {
      .info-container {
        .author {
          display: flex;
        }
      }
      h3 {
        font-size: 2rem;
      }
    }
  }
`;
