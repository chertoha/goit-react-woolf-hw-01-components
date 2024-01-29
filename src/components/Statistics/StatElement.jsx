import PropTypes from 'prop-types';
import { Label, Percentage, StatItem } from './Statistics.styled';
import { getRandomHexColor } from 'helpers/randomColor';

const StatElement = ({ id, label, percentage }) => {
  return (
    <StatItem key={id} bgColor={getRandomHexColor()}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatItem>
  );
};

export default StatElement;

StatElement.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
