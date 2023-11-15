import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  _id: string;
  coverImage: string;
  title: string;
  description: string;
};
const BlogCard = (props: Props) => {
  return (
    <BlogCardContainer>
      <div className="card-header">
        <img src={props.coverImage} alt="cover image" />
      </div>
      <div className="card-body">
        <h4>{props.title}</h4>
      </div>
      <div className="card-footer">
        <p>
          {props.description.substring(0, 30)}
          <Link to={`/blog/${props._id}`}> Read More</Link>...
        </p>
      </div>
    </BlogCardContainer>
  );
};
export default BlogCard;

const BlogCardContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  margin: 0 auto;
  padding: 0.25rem;
  background-color: var(--clr-white);
  border-radius: var(--radius);
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  text-decoration: none;
  &:hover {
    box-shadow: var(--shadow-3);
  }
  .card-header {
    img {
      width: 100%;
      height: 100%;
      max-height: 250px;
      object-fit: cover;
      border-radius: var(--radius);
      margin: 0 auto;
    }
  }
  .card-body {
    h4 {
      margin: 0.25rem 0;
      text-transform: capitalize;
      text-align: left !important;
    }
  }
  .card-footer {
    p {
      color: var(--blue-700);
      a {
        color: var(--orange);
        text-decoration: none;
      }
    }
  }
`;
