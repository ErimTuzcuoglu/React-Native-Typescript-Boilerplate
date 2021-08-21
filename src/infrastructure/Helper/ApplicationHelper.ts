/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
import i18next from '@config/i18n';

interface IApplicationHelper {
  cloneObject: (obj: Record<string, unknown>) => Record<string, unknown>;
  isKeyExistsOn: (json: Record<string, unknown>, key: string) => boolean;
  isEmptyArray: (value: Array<unknown>) => boolean;
  isEmptyString: (value: string) => boolean;
  isNull: (value: unknown) => boolean;
  isNullOrUndefined: (value: unknown) => boolean;
  isNullOrUndefinedOrEmpty: () => boolean;
  isUndefined: (value: unknown) => boolean;
  translate: (id: string, options?: Record<string, unknown>) => string;
}

const ApplicationHelper: IApplicationHelper = class ApplicationHelper {
  public static isKeyExistsOn = (
    json: Record<string, unknown>,
    key: string
  ): boolean =>
    key
      .split('.')
      .reduce(
        (a: Record<string, unknown> | {}, c: string): any =>
          a.hasOwnProperty(c) ? (a as any)[c] || 1 : false,
        Object.assign({}, json)
      ) === false
      ? false
      : true;

  public static cloneObject = (obj: Record<string, unknown>): typeof obj =>
    JSON.parse(JSON.stringify(obj));

  public static isEmptyArray = (value: Array<unknown>): boolean =>
    value.length === 0;

  public static isEmptyString = (value: string): boolean => value === '';

  public static isNull = (value: unknown): boolean => value === null;

  public static isNullOrUndefined = (value: unknown): boolean =>
    value !== undefined && value !== null ? false : true;

  public static isNullOrUndefinedOrEmpty = (...args: any): boolean => {
    for (const arg of args) {
      if (ApplicationHelper.isNullOrUndefined(arg) || arg.length < 1) {
        return true;
      }
    }
    return false;
  };

  public static isUndefined = (value: unknown): boolean => value === undefined;

  public static translate = (
    id: string,
    options?: Record<string, unknown>
  ): string => i18next.t(id, options);
};

export default ApplicationHelper;
