import styled from 'styled-components';
import commercial from '../assets/img5.jpg';
import residential from '../assets/img3.jpg';
import other from '../assets/img7.jpg';
import { Link } from 'react-router-dom';
import FeaturedProperties from '../components/FeaturedProperties';
import { FaArrowRight } from 'react-icons/fa';
import FeaturedBlogs from '../components/FeaturedBlogs';
import { getPosts } from '../redux/features/blog/blogSlice';
import { useAppDispatch } from '../redux/hooks';
import { useEffect } from 'react';

const Landingpage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <LandingContainer>
      <div className="hero">
        <div className="content">
          <h1>Welcome to Assetwise</h1>
          <h3>Companions in your real estate journey </h3>
        </div>
      </div>

      <div className="cards-container">
        <Link to="/properties?category=residential" className="card">
          <div className="card-img">
            <img src={residential} alt="residential property" />
          </div>
          <div className="card-content">
            <h3>Residential </h3>
            <p>
              With access to unrivalled property for sale in Kenya,Assetwise
              Properties is expertly positioned to help you in your Kenyan
              property search.
            </p>
          </div>
        </Link>
        <Link to="/properties?category=commercial" className="card">
          <div className="card-img">
            <img src={commercial} alt=" commercial property" />
          </div>
          <div className="card-content">
            <h3>Commercial </h3>
            <p>We specialises in the leasing and sale of prime office space.</p>
          </div>
        </Link>
      </div>
      <div className="about-section">
        <article className="about-content">
          <h3>Who we are</h3>
          <div className="underline"></div>
          <p>
            Assetwise Properties is a real estate company that provides
            professional services in property management, property sales and
            letting, property valuation, property development consultancy and
            property investment consultancy. We are a team of professionals with
            a wealth of experience in the real estate industry. We are committed
            to providing our clients with the highest level of professionalism,
            service response and attention to detail.
          </p>
          <p>
            Our services are designed to make your life easier by taking care of
            all the details so you can focus on what matters most. We offer a
            <Link to="/about"> Read More ...</Link>
          </p>
        </article>
        <div className="about-image">
          <img src={other} alt="commercial property" />
        </div>
      </div>
      <div className="featured-container">
        <h3>Featured Properties</h3>
        <div className="underline"></div>
        <FeaturedProperties />
      </div>
      <div className="featured-container variant">
        <h3>Insights</h3>
        <div className="underline"></div>
        <FeaturedBlogs />
        <Link to={'/blog'} className="button veiw-all">
          veiw all Posts
          <span className="button-icon">
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </LandingContainer>
  );
};
export default Landingpage;

const LandingContainer = styled.section`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    max-width: 600px;
    margin-inline: auto;
    h1,
    h3 {
      text-align: center;
      margin: 0.25rem 0;
      color: var(--clr-white);
    }
  }
  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
    max-width: var(--max-width);
    margin-left: auto;
    margin-right: auto;

    .card {
      display: grid;
      grid-template-columns: 1fr;
      width: 100%;
      padding: 0.25rem;
      background-color: var(--clr-white);
      border-radius: var(--radius);
      box-shadow: var(--shadow-1);
      transition: var(--transition);
      text-decoration: none;
      &:hover {
        box-shadow: var(--shadow-3);
      }
      .card-content {
        h3 {
          color: var(--blue-700);
          margin: 0.25rem 0;
          margin-bottom: 0;
        }
        p {
          color: var(--blue-700);
        }
      }
      .card-img {
        width: 100%;
        img {
          width: 100%;
          object-fit: cover;
          border-radius: var(--radius);
        }
      }
    }
  }
  .about-section {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
    max-width: var(--max-width);
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    .about-content {
      h3 {
        color: var(--blue-700);
        margin: 0.25rem 0;
        margin-bottom: 0;
        text-align: center;
      }
      p {
        color: var(--blue-700);

        a {
          color: var(--orange);
          text-decoration: none;
        }
      }
    }
    .about-image {
      display: none;
      img {
        width: 100%;
        object-fit: cover;
        border-radius: var(--radius);
      }
    }
  }
  .featured-container {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
    max-width: var(--max-width);
    margin-left: auto;
    margin-right: auto;
    align-items: center;

    h3 {
      color: var(--blue-700);
      margin: 0.25rem 0;
      text-align: center;
      margin-bottom: 0;
    }
    .veiw-all {
      text-decoration: none;
      text-transform: capitalize;
      width: fit-content;
    }
    .featured-blogs {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    }
  }
  .variant {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 700px) {
    .cards-container {
      grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    }
    .about-section {
      grid-template-columns: 1fr 1fr;
      .about-image {
        display: block;
      }
    }
  }
`;
