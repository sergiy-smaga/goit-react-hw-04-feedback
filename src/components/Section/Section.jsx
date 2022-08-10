import PropTypes from 'prop-types';
import { StyledSection } from './StyledSection';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <h1>{title}</h1>
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
