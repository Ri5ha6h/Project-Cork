import axios from 'axios';

let authToken : string | undefined;

axios.interceptors.request.use((config) => {
  
  if (!authToken) {
    return config;
  }
  return {
    ...config,
    headers: { ...config.headers, Authorization: authToken },
  };
});

axios.interceptors.response.use(undefined, (error) => {
  if (error.response.data.code === 9101) {
    authToken = undefined;
    window.location.href = '/login';
  }

  return Promise.reject(error);
});

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

export const LS_LOGIN_TOKEN = 'login_token';

export const login = (data: LoginRequest) => {
  const url = BASE_URL + '/login';
  return axios.post<LoginResponse>(url, data).then((response) => {
    localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
    authToken = response.data.token;
    return response.data.user;
  });
};

export const logout = () => {
  authToken = undefined;
};

interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: 'all-groups' | 'favorite' | 'archived';
}

// interface GroupResult {
//   results: GroupResponse[];
// }

interface GroupResponse {
  data: {
    id?: number;
    creator?: {
      first_name?: string;
    };
    name?: string;
    group_image_url?: string;
  };
}

export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + '/groups';

  return axios
    .get<GroupResponse>(url, { params: data })
    .then((response) => {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch((e) => console.error(e));
};
