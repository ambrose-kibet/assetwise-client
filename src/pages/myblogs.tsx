import styled from 'styled-components';
import StatComponent from '../components/StatComponent';
import { FaBlog } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import { BsHeart } from 'react-icons/bs';
import MyStories from '../components/MyStories';
import Categories from '../components/Categories';
const MyBlogs = () => {
  return (
    <MyBlogsContainer>
      <div className="container">
        <h2 className="section-title">
          My <span>Blogs</span>
        </h2>
        <div className="stats-container">
          <StatComponent
            amount={10}
            icon={FaBlog}
            info="Total posts"
            status="pending"
          />
          <StatComponent
            amount={8}
            icon={BiCommentDetail}
            info="Total comments"
            status="pending"
          />
          <StatComponent
            amount={10}
            icon={BsHeart}
            info="Total Likes"
            status=" pending"
          />
        </div>
        <div className="all-container">
          <MyStories />
          <Categories />
        </div>
      </div>
    </MyBlogsContainer>
  );
};
export default MyBlogs;

const MyBlogsContainer = styled.section`
  .container {
    .stats-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
      padding: 0.25rem;
    }
    .all-container {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-top: 1rem;
    }
    @media screen and (min-width: 576px) {
      .all-container {
        grid-template-columns: 1fr 1fr;
      }
    }
    @media screen and (min-width: 896px) {
      .all-container {
        grid-template-columns: 2fr 1fr;
      }
    }
  }
`;
