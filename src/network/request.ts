import axios, {AxiosInstance /* AxiosError, AxiosRequestConfig */} from 'axios';

/**
 * Custom Axios error interfaces
 */
/*
interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  _retry: boolean | undefined;
}
interface CustomAxiosError extends AxiosError {
  config: CustomAxiosRequestConfig;
}
*/

export default class Request {
  private static _axiosInstance?: AxiosInstance = undefined;

  private static createInstance(): AxiosInstance {
    return axios.create({
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      timeout: 30000
    });
  }

  /**
   * Axios Response Interceptor
   */
  /*
    private static addResponseInterceptor(): void {
      this.getInstance().interceptors.response.use(
        response => response,
        (error: CustomAxiosError) => {
          const {config, response} = error;
          if (response?.status === 401 && config._retry !== true) {
            error.config._retry = true;
          }
          return error;
        }
      );
    }
  */

  /**
   *
   * Axios Request Interceptor
   */
  /*
  private static addRequestInterceptor(): void {
    Request._axiosInstance.interceptors.request.use(
      request => {
        console.log(request.baseURL);
        return request;
      },
      error => {
        console.log(error);
        return Promise.reject(error);
      }
    );
  }
  */

  static getInstance(): AxiosInstance {
    if (Request._axiosInstance === undefined) {
      Request._axiosInstance = this.createInstance();
      // this.addRequestInterceptor();
      // this.addResponseInterceptor();
    }
    return Request._axiosInstance;
  }

  static setToken(token: string): void {
    this.getInstance().defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  static removeToken(): void {
    this.getInstance().defaults.headers.common.Authorization = '';
  }
}
