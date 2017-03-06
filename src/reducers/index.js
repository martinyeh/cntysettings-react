import { combineReducers } from 'redux-immutable';
import ui from './ui/uiReducers';// import routes from './routes';
import viveport from './data/viveportReducers';// import routes from './routes';

// states { ui, viveport }
const rootReducer = combineReducers({
  ui,
  viveport,
});

export default rootReducer;
