import request from 'src/utils/request';

export function userLogin(payload) {
  const url = '/user/login';
  return request.post(url, payload);
}
