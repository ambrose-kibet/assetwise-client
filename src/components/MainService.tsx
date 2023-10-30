import styled from 'styled-components';
import { useState } from 'react';
import { GiStabbedNote } from 'react-icons/gi';

const MainService = () => {
  const [activeTab, setActiveTab] = useState<string>('land brokerage');
  return (
    <MainServiceContainer>
      <div className="titles-container">
        <h5
          className={activeTab === 'land brokerage' ? 'active' : ''}
          onClick={() => setActiveTab('land brokerage')}
        >
          land brokerage
        </h5>
        <h5
          className={activeTab === 'property management' ? 'active' : ''}
          onClick={() => setActiveTab('property management')}
        >
          property management
        </h5>
      </div>
      <div className="content-container">
        {activeTab === 'land brokerage' && (
          <div>
            <p>
              At AssetWise Realtors, we specialize in land properties. Whether
              you're buying or selling, our experienced team is here to assist
              you every step of the way. We'll help you find the ideal land that
              matches your needs and handle negotiations on your behalf. Your
              real estate goals are our priority, and we're committed to making
              the process simple and successful.
            </p>
            <h5>How we transact </h5>
            <div className="underline"></div>
            <ul>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                You sign an agreement with us to authorize us to find you a
                buyer.
              </li>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                We conduct a site visit to the property and take pictures and
                videos of the property.
              </li>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                We advertise the property to potential buyers using our network
                and expertise.
              </li>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                We conduct site visits with potential buyers and negotiate on
                your behalf.
              </li>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                We prepare the sale agreement and facilitate the signing of the
                agreement.
              </li>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                We also advise you and the buyer to use licensed lawyers to
                conduct due diligence and initiate the transfer process. This is
                to ensure legal compliance and security of the transaction.
              </li>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                We facilitate the transfer of the property to the buyer and
                ensure that the buyer receives the title deed.
              </li>
            </ul>
          </div>
        )}
        {activeTab === 'property management' && (
          <div>
            <p>
              At AssetWise Realtors, we offer comprehensive property management
              services. Our dedicated team takes the hassle out of property
              ownership by finding tenants for vacant properties, thoroughly
              screening them, and managing lease agreements. We handle all
              aspects of financial management, including collecting and
              remitting rental income to property owners, managing rent
              payments, tracking expenses, and providing regular reports.
              Additionally, we prioritize property maintenance to ensure that
              your investment remains in top condition.
            </p>
            <h5>How we transact </h5>
            <div className="underline"></div>
            <ul>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                You sign an agreement with us that authorizes us to manage your
                property on your behalf
              </li>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                We conduct a site visit to the property and take pictures and
                videos of the property.
              </li>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                We will advertise your property on various platforms, show it to
                interested applicants, and screen them for suitability.
              </li>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                We will prepare a lease contract that protects your rights and
                interests, and have the tenant sign it before moving in.
              </li>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                We will document the condition of your property and any existing
                damages, and check them again when the tenant moves out.
              </li>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                We will collect rent from the tenant every month, and pay you
                after deducting our fees. We will also take care of any
                maintenance or repair issues that arise during the tenancy.
              </li>
              <li>
                <span className="icon">
                  <GiStabbedNote />
                </span>
                We will keep you updated on the status of your property and
                tenant, and provide you with monthly statements and reports. You
                can also contact us anytime if you have any questions or
                concerns.
              </li>
            </ul>
          </div>
        )}
      </div>
    </MainServiceContainer>
  );
};
export default MainService;

const MainServiceContainer = styled.div`
  width: 100%;
  display: grid;
  .titles-container {
    width: fit-content;
    margin: 0.5rem auto;
    display: flex;
    background-color: var(--clr-white);
    border-radius: 2.5rem;
    padding: 0;

    h5 {
      color: var(--blue-700);
      font-size: 0.7rem;
      font-weight: 500;
      text-transform: capitalize;
      letter-spacing: 0.1rem;
      margin: 0 0.25rem;
      padding: 0.85rem;
      transition: var(--transition);
      cursor: pointer;
    }
    .active {
      background-color: var(--orange);
      color: var(--clr-white);
      border-radius: 2.5rem;
    }
  }
  .content-container {
    div {
      .underline {
        height: 0.15rem;
        margin-top: 0;
      }
      p {
        margin: 0.5rem 0;
      }
      h5 {
        margin: 0.5rem 0;
        text-align: center;
      }
      ul {
        margin: 0.5rem 0;

        li {
          margin: 0.25rem 0;
          display: flex;
          align-items: center;
          span {
            color: var(--blue-700);
            font-size: 1.2rem;
            margin-right: 0.5rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 400px) {
    .titles-container {
      h5 {
        font-size: 0.8rem;
      }
    }
  }
`;
