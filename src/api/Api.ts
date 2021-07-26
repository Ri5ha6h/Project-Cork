import React from 'react';
import axios from 'axios';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  data: {
    is_2fa_enabled: boolean;
  };
  token: string;
  user: User;
}

interface User {
  id: number;
  first_name: string;
  last_name: string;
  role: 'staff' | 'admin';
}

const BASE_URL = 'https://api-dev.domecompass.com';

const LS_LOGIN_TOKEN = 'login_token';

export const login = (data: LoginRequest) => {
  const url = BASE_URL + '/login';
  return axios.post<LoginResponse>(url, data).then((response) => {
    localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
    return response.data.user;
  });
};

interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: 'all-groups' | 'favorite' | 'archived';
}

export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + '/groups';

  const token = localStorage.getItem(LS_LOGIN_TOKEN);

  axios
    .get(url, { params: data, headers: {Authorization : token} })
    .then((response) => console.log(response))
    .catch((e) => console.error(e));
};