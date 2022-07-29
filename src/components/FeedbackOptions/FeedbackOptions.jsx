import styled from 'styled-components';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
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
  }
}

const Button = styled.button`
  padding: 10px;
  margin: 15px;
  display: inline-block;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
`;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
