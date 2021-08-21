import endpoints from '@network/endpoints/AuthEndpoints';
import request from '@network/request';
import {
  IGenericResponse,
  ILoginPayload,
  ILoginResponse,
  User
} from '@value/models';

interface IAuthService {
  login(payload: ILoginPayload): Promise<IGenericResponse<ILoginResponse>>;
  getUserInfo(): Promise<IGenericResponse<User>>;
}

class AuthService implements IAuthService {
  public login(
    payload: ILoginPayload
  ): Promise<IGenericResponse<ILoginResponse>> {
    return new Promise((resolve /* , reject */) => {
      request
        .getInstance()
        .post<IGenericResponse<ILoginResponse>>(endpoints.login, {
          ...payload,
          isMobile: true
        })
        .then(res => resolve(res.data));
    });
  }

  public getUserInfo(): Promise<IGenericResponse<User>> {
    return new Promise((resolve /* , reject */) => {
      console.log(endpoints.get)
      request
        .getInstance()
        .get<IGenericResponse<User>>(`${endpoints.get}`)
        .then(res => resolve(res.data));
    });
  }
}

export const authService = new AuthService();
