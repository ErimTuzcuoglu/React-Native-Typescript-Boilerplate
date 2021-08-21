export interface IGenericResponse<T> {
  succeeded: boolean;
  message: string | null;
  errors: Array<string> | null;
  data: T;
}
