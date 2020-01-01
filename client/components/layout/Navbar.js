import React from 'react';
import PropTypes from 'prop-types';
const Navbar = ({ title, icon }) => {
  return (
    <div className='navbar bg-primary'>
      <h1>
        <i classNAme={icon} />
        {title}
      </h1>
    </div>
  );
};
Nav.propTypes = {
  title: ProTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};
Nav.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt'
};
export default Navbar;
