import styled from 'styled-components';
import { featuredBlogs } from '../utils/data';
import BlogCard from './BlogCard';
const FeaturedBlogs = () => {
  return (
    <FeaturedContainer>
      {featuredBlogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </FeaturedContainer>
  );
};
export default FeaturedBlogs;

const FeaturedContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0.25rem;
  gap: 1rem;
`;
