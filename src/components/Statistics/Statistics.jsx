import styled from 'styled-components';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <>
        <StyledText> Good: {good}</StyledText>
        <StyledText> Neutral: {neutral}</StyledText>
        <StyledText> Bad: {bad}</StyledText>
        <StyledText> Total: {total} </StyledText>
        <StyledText>Positive feedback: {positivePercentage}%</StyledText>
      </>
    );
  }
}

const StyledText = styled.p`
  font-size: 24px;
  display: block;
`;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
