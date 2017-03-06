import { connect } from 'react-redux';
import HomePage from '../../components/HomePage';

import {
  getViveport,
  changeAccountId,
} from '../../actions';

export default connect(
  state => ({
    accountId: state.getIn(['viveport', 'accountId']),
  }),
  dispatch => ({
    onChangeAccountId: event => (
      dispatch(changeAccountId(event.target.value))
    ),
    onSubmitAccountId: accountId => () => (
      dispatch(getViveport(accountId))
    ),
  }),
  (stateProps, dispatchProps, ownProps) => {
    const { accountId } = stateProps;
    const { onSubmitAccountId } = dispatchProps;
    return Object.assign({}, stateProps, dispatchProps, ownProps, {
      onSubmitAccountId: onSubmitAccountId(accountId),
    });
  }
)(HomePage);
