import { connect } from 'react-redux';
import Component from './Booky';
import { actions } from '../../_state/categories';

export const mapDispatchToProps = function(dispatch) {
  return {
    addBookmark: (data) => {
      dispatch(actions.addBookmark(data));
    }
  };
};

const Container = connect(
  null,
  mapDispatchToProps
)(Component);

export default Container;
