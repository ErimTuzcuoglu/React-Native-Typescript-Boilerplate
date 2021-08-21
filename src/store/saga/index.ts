import {all, AllEffect, ForkEffect, takeLatest} from 'redux-saga/effects';
import {StartupActions, UserActions} from '@store/action';
import {login, logout} from '@store/saga/user';
import {startup} from '@store/saga/startup';

export default function* root(): Generator<
  AllEffect<ForkEffect<never>>,
  void,
  unknown
> {
  yield all([
    takeLatest(StartupActions.Startup, startup),

    takeLatest(UserActions.Login, login),
    takeLatest(UserActions.Logout, logout)
  ]);
}
