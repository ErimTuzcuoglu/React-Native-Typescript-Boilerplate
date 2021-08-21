import {ActionConsts} from '@store/action/startup';

export interface IStartupActionPayload {
  isFinishedCallback: (isFinished: boolean) => void;
}

interface IStartupAction {
  payload: IStartupActionPayload;
  type: typeof ActionConsts.Startup;
}

export type StartupActionType = IStartupAction;
