import {IStartupActionPayload, StartupActionType} from '@store/type';

export enum ActionConsts {
  Startup = 'STARTUP'
}

const StartupAction = (payload: IStartupActionPayload): StartupActionType => {
  return {
    payload,
    type: ActionConsts.Startup
  };
};

export {StartupAction};
