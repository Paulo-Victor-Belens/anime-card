import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Input extends Component {
  render() {
    const {
      type,
      name,
      id,
      placeholder,
      value,
      onChange,
      test,
      checked,
      disabled,
      className,
    } = this.props;
    return (

      <input
        type={ type }
        name={ name }
        id={ id }
        placeholder={ placeholder }
        checked={ checked }
        value={ value }
        onChange={ onChange }
        data-testid={ test }
        disabled={ disabled }
        className={ className }
      />
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  test: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Input;

// const cardDescriptionVerify = cardDescription.length > 0;
// const cardAttr1Verify = cardAttr1.length > 0;
// const cardAttr2Verify = cardAttr2.length > 0;
// const cardAttr3Verify = cardAttr3.length > 0;
// const cardImageVerify = cardImage.length > 0;
// const cardRareVerify = cardRare.length > 0;
