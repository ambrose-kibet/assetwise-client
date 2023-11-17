import { ReactElement } from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

type StatComponentProps = {
  info: string;
  amount: number;
  icon: React.ElementType; // Using React.ElementType for the icon prop
  status: string;
};

const StatComponent = ({
  info,
  amount,
  icon: Icon,
  status,
}: StatComponentProps): ReactElement => {
  return (
    <StatComponentContainer className={`single-stat stats-${status}`}>
      <div className="stat-info">
        <h2>
          <span>
            <CountUp start={0} end={amount} />
          </span>
          <span className={status}>
            <Icon />
          </span>
        </h2>
        <h3>{info}</h3>
      </div>
    </StatComponentContainer>
  );
};

export default StatComponent;
const StatComponentContainer = styled.article`
  border-radius: 0.25rem;
  background: var(--blue-700);
  display: grid;
  grid-template-columns: 1fr;

  .stat-info {
    margin: 0 0.5rem;
  }
  .stat-info > h2 {
    display: flex;
    color: var(--clr-white);
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;
    font-size: 3.5rem;
    font-weight: 800;
  }
  .stat-info > h3 {
    text-transform: capitalize;
    font-size: 1.5rem;
    color: var(--clr-white);
    text-align: center;
  }
  .stat-info > h2 > span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
