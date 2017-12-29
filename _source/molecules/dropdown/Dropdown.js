import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = parseInt(event.target.value, 10);

    this.props.onChange(value);
  }

  render() {
    const { options, className, value } = this.props;

    return (
      <select className={ `dropdown ${className}` } onChange={ this.onChange } value={ value }>
        { options.map((option, index) =>
          <option className="dropdown__option" value={ index } key={ index }>{ option.name }</option>
        ) }
      </select>
    );
  }
}

Dropdown.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

Dropdown.defaultProps = {
  className: '',
  value: 0
};
