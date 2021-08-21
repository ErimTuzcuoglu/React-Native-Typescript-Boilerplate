import {Action as ReduxAction} from 'redux';

export interface IAction<T, P> extends ReduxAction {
  readonly type: T;
  readonly payload?: P;
}
