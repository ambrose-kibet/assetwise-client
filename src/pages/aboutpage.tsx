import styled from 'styled-components';
import MainService from '../components/MainService';

const Aboutpage = () => {
  return (
    <AboutContainer>
      <div className="container">
        <h2 className="section-title">
          About <span>Us</span>
        </h2>

        <p>
          Assetwise Properties is a real estate company that provides
          professional services in property management, property sales and
          letting, property development consultancy and property investment
          consultancy. We are a team of professionals with a wealth of
          experience in the real estate industry. We are committed to providing
          our clients with the highest level of professionalism, service
          response and attention to detail. Our services are designed to make
          your life easier by taking care of all the details so you can focus on
          what matters most.
        </p>

        <h4>Our services</h4>
        <div className="underline"></div>
        <MainService />
      </div>
    </AboutContainer>
  );
};
export default Aboutpage;

const AboutContainer = styled.div`
  width: 100%;
  .container {
    padding: 0 0.5rem;
    h2 {
      margin-bottom: 1rem;
    }
    h4 {
      text-align: center;
      margin: 0.25rem auto;
      margin-top: 1.3rem;
      text-transform: capitalize;
    }
  }
`;
