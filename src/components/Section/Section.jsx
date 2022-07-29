import styled from 'styled-components';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <StyledSection>
        <h1>{title}</h1>
        {children}
      </StyledSection>
    );
  }
}

const StyledSection = styled.section`
  background-color: lightgray;
  max-width: 500px;
  border-radius: 5px;
  margin: 0 auto;
`;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
