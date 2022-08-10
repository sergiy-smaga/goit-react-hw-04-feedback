import PropTypes from 'prop-types';
import { Button } from './StyledButton';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <Button
          onClick={() => {
            onLeaveFeedback(option);
          }}
          key={option}
        >
          {option}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
