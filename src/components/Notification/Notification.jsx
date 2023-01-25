import PropTypes from 'prop-types';
import { TitleH3 } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <div>
      <TitleH3>{message}</TitleH3>
    </div>
  );
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
