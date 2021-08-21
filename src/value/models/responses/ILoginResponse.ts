import {User} from '@value/models/types/User';

export interface ILoginResponse {
  accessToken: string;
  user: User;
}
