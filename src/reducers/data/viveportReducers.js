import { handleActions } from 'redux-actions';
import { ViveportState } from '../../constants/models';

const githubReducers = handleActions({
  GET_VIVEPORT_SUCCESS: (state, { payload }) => (
    state.merge({
      data: payload.data,
    })
  ),
  CHANGE_ACCOUNT_ID: (state, { payload }) => (
    state.merge({
      accountId:
      payload.accountId,
    })
  ),
}, ViveportState);

export default githubReducers;
