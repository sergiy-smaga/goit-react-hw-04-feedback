import PropTypes from 'prop-types';
import { StyledText } from './StyledText';

export const Notification = ({ message }) => {
  return <StyledText> {message}</StyledText>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
