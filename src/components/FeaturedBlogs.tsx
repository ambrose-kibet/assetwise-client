import styled from 'styled-components';
import BlogCard from './BlogCard';
import { RootState } from '../redux/store';
import { useAppSelector } from '../redux/hooks';
import Loading from './spinnner';

const FeaturedBlogs = ({ flagId }: { flagId?: string }) => {
  const { posts, isLoading } = useAppSelector((state: RootState) => state.blog);

  return (
    <FeaturedContainer>
      <div className="featured-blogs">
        {(isLoading && <Loading />) ||
          posts
            .filter((blog) => blog.featured === true)
            .filter((blog) => blog._id !== flagId)
            .slice(0, 3)
            .map((blog) => <BlogCard key={blog._id} {...blog} />)}
      </div>
    </FeaturedContainer>
  );
};
export default FeaturedBlogs;

const FeaturedContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0.25rem 0;
  .featured-blogs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
  }
`;
