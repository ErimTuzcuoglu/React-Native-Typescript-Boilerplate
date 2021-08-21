import {UserActions} from '@store/action';
import {UserActionType} from '@store/type';
import {IUserStoreState} from '@store/state';

/**
 * INITIAL_STATE
 */
const INITIAL_STATE: IUserStoreState = {
  userInfo: undefined
};

/**
 * REDUCER
 */
export const UserReducer = (
  state = INITIAL_STATE,
  action: UserActionType
): IUserStoreState => {
  switch (action.type) {
    case UserActions.Login:
      return {
        ...state,
        ...action.payload
      };

    case UserActions.Logout:
      return {
        ...state,
        userInfo: INITIAL_STATE.userInfo
      };
    case UserActions.SetUserInfo:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
