/* eslint-disable @typescript-eslint/no-unused-vars */
import 'react';
import {call} from 'redux-saga/effects';
/* #region  Local Imports */
import RootNavigator from '@navigation/RootNavigator';
import {authService} from '@network';
import {ScreenKeys} from '@value/constants';
import {IGenericResponse, ILoginPayload, ILoginResponse} from '@value/models';
import Request from '@network/request';
import {Toast} from '@components';
/* #endregion */

export function* login(actionData: never): unknown {
  const {payload} = actionData;
  const {password, userName} = payload;

  const loginResult: IGenericResponse<ILoginResponse> = yield call(
    authService.login,
    {
      password,
      userName
    } as ILoginPayload
  );

  if (loginResult.succeeded === true) {
    yield call(Request.setToken, loginResult.data.accessToken);

    RootNavigator.navigate(ScreenKeys.DrawerMenu, {
      screen: ScreenKeys.Home
    });
  } else if (loginResult.errors && loginResult.errors.length > 0) {
    loginResult.errors.forEach((message: string) =>
      Toast.show({title: message})
    );
  }
}

export function* logout(actionData: unknown): Generator<never, void, unknown> {
  RootNavigator.navigationReset(ScreenKeys.Login);
}
