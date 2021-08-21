import {IAction} from './IAction';

export const CreateAction = <T extends string, P>(
  type: T,
  payload?: P
): IAction<T, P> => {
  return {payload, type};
};
