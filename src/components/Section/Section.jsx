import PropTypes from 'prop-types';
import { TitleH2 } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <>
      {title && <TitleH2>{title}</TitleH2>}
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
