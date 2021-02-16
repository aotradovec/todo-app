import { wait } from './wait';

class UserApi {
  async login({ username, password }) {
    await wait(250);

    if (username === 'admin' && password === 'admin') {
      return {
        id: 1,
        username: 'admin'
      };
    }

    return null;
  }
}

export const userApi = new UserApi();