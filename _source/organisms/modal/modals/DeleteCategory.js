import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Base from '../Base';
import Dropdown from '../../../molecules/dropdown';

export default class DeleteCategory extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.state = {
      id: props.data.id,
      newCategoryId: null,
      value: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.data.id,
      newCategoryId: null,
      value: 0
    });
  }

  onChange(index) {
    this.setState({
      newCategoryId: index === 0 ? null : this.props.data.categories[index - 1].id,
      value: index
    });
  }

  render() {
    const { data, onClose, onSave } = this.props;
    const options = [{name: 'Delete all'}, ...data.categories.map(({name}) => ({
      name: `Move to: ${name}`
    }))];

    return (
      <Base onClose={ onClose } onSave={ () => { onSave(this.state); } } headline="Delete category">
        <label className="modal__label">{ 'This category will be deleted: ' }<b>{ data.name }</b></label>
        <label className="modal__label">{ 'What do you want to do with the bookmarks?' }</label>
        <Dropdown options={ options } onChange={ this.onChange } value={ this.state.value } />
      </Base>
    );
  }
}

DeleteCategory.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};