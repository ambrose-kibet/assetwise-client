import styled from 'styled-components';
import tempImage from '../assets/profile.svg.png';
import { BsTelephoneFill } from 'react-icons/bs';

type Props = {
  id: string;
  name: string;
  position: string;
  description: string;
  contact: string;
};
const PeopleCard = (props: Props) => {
  return (
    <PeopleCardContainer>
      <div className="card-header">
        <img src={tempImage} alt="place holder image" />
      </div>
      <div className="card-body">
        <h5>{props.name}</h5>
        <p>{props.position}</p>
        <p>{props.description}</p>
      </div>
      <div className="card-footer">
        <p>
          <span className="icon">
            <BsTelephoneFill />
          </span>
          {props.contact}
        </p>
      </div>
    </PeopleCardContainer>
  );
};
export default PeopleCard;

const PeopleCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  margin: 0 auto;
  padding: 0.5rem;
  margin-bottom: 1rem;

  border-radius: var(--radius);

  transition: var(--transition);
  text-decoration: none;
  .card-header {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--radius);
      margin: 0 auto;
    }
  }
  .card-body {
    h5 {
      margin: 0.25rem 0;
      text-align: center;
    }
    p {
      text-align: left;
    }
  }
  .card-footer {
    p {
      color: var(--blue-700);
      display: flex;
      align-items: center;

      span {
        font-size: 1.5rem;
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
      }
    }
  }
`;
