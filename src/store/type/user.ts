import {ActionConsts} from '@store/action/user';
import {IAction} from '@store/IAction';
import {ILoginPayload, ILoginResponse} from '@value/models';

type LoginAction = IAction<typeof ActionConsts.Login, ILoginPayload>;

type LogoutAction = IAction<typeof ActionConsts.Logout, void>;

/* #region  UserInfo */
export interface ISetUserInfoPayload {
  userInfo: ILoginResponse;
}
type SetUserAccessInfoAction = IAction<
  typeof ActionConsts.SetUserInfo,
  ISetUserInfoPayload
>;

/* #endregion */

export type UserActionType =
  | LoginAction
  | LogoutAction
  | SetUserAccessInfoAction;
