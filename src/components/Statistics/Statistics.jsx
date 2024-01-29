import PropTypes from 'prop-types';
import StatElement from './StatElement';
import { StatList, Title, Wrapper } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Wrapper>
      {title && <Title>Upload stats</Title>}

      <StatList>
        {stats.map(stat => (
          <StatElement {...stat} />
        ))}
      </StatList>
    </Wrapper>
  );
};

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
