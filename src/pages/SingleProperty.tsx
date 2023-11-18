import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { Link, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import Loading from '../components/spinnner';

const SingleProperty = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const {
    property: {},
    isLoading,
  } = useAppSelector((state) => state.property);
  if (isLoading) {
    return (
      <SinglePropertyCardContainer>
        <div className="container">
          <Link to="/blog" type="button" className="link">
            <span className="link-icon">
              <FaArrowLeft />
            </span>
            Back to Properties
          </Link>
          <Loading />
        </div>
      </SinglePropertyCardContainer>
    );
  }
  return (
    <SinglePropertyCardContainer>
      <div className="container">
        <Link to="/blog" type="button" className="link">
          <span className="link-icon">
            <FaArrowLeft />
          </span>
          Back to Properties
        </Link>
      </div>
    </SinglePropertyCardContainer>
  );
};
export default SingleProperty;
const SinglePropertyCardContainer = styled.section`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 0.5rem;
    min-height: 60vh;
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
  }
`;
