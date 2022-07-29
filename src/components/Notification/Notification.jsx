import styled from 'styled-components';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <StyledText> {message}</StyledText>;
  }
}

const StyledText = styled.p`
  color: red;
  font-weight: 700;
`;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
