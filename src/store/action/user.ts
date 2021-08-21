import {CreateAction} from '@store/CreateAction';
import {ISetUserInfoPayload, UserActionType} from '@store/type';
import {ILoginPayload} from '@value/models';

export enum ActionConsts {
  Login = 'LOGIN',
  Logout = 'LOGOUT',
  SetUserInfo = 'SET_USER_INFO'
}

const LoginAction = (payload: ILoginPayload): UserActionType =>
  CreateAction(ActionConsts.Login, payload);

const LogoutAction = (): UserActionType =>
  CreateAction(ActionConsts.Logout, undefined);

const SetUserInfo = ({userInfo}: ISetUserInfoPayload): UserActionType =>
  CreateAction(ActionConsts.SetUserInfo, {userInfo});

export {LoginAction, LogoutAction, SetUserInfo};
