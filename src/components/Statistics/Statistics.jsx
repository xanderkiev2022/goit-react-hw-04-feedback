import PropTypes from 'prop-types';
import {
  List,
  Item,
  Container,
  ItemTotalResultText,
} from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <Container>
        {' '}
        <Item>
          <span>Good: </span> {good}
        </Item>
        <Item>
          <span>Neutral: </span> {neutral}
        </Item>
        <Item>
          <span>Bad: </span> {bad}
        </Item>
      </Container>
      <Item>
        <span>Total: </span>
        {total}
      </Item>
      <Item>
        <ItemTotalResultText>Positive feedback: </ItemTotalResultText>
        {positivePercentage}%
      </Item>
    </List>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
