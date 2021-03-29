import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  children, variant, onClick, url, title,
}) {
  return (
    <div>
      <button
        disabled={variant === 'addButton' && !(url && title)}
        type="button"
        className={variant}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

Button.defaultProps = {
  title: undefined,
  url: undefined,
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['addButton', 'closeButton', 'deleteButton', 'newButton']).isRequired,
  onClick: PropTypes.func.isRequired,
  url: PropTypes.string,
  title: PropTypes.string,
};

export default Button;
