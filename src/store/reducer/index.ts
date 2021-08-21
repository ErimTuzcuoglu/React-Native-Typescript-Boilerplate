import {combineReducers} from 'redux';
import {UserReducer} from '@store/reducer/user';
import {IApplicationState} from '@store/IApplicationState';

export default combineReducers<IApplicationState>({
  user: UserReducer
});
