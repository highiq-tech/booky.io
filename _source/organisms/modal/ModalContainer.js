import { connect } from 'react-redux';
import Component from './Modal';
import { actions } from '../../_state/modal';

export const mapStateToProps = function(state) {
  return {
    modal: state.modal.modal,
    open: state.modal.open,
    data: {
      ...state.modal.data,
      categories: state.categories.filter(({id}) => id !== state.modal.data.id)
    }
  };
};

export const mapDispatchToProps = function(dispatch) {
  return {
    closeModal: () => {
      dispatch(actions.closeModal());
    }
  };
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default Container;