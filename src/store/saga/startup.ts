/* eslint-disable @typescript-eslint/no-explicit-any */
import 'react';
/* #region  Local Imports */
/* #endregion */

/**
 *
 * You can use this saga for your startup business logic (app startup requests,
 * preparing store etc...)
 */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* startup(actionData: any): Generator<any, void, any> {
  actionData.payload.isFinishedCallback(true);
}
