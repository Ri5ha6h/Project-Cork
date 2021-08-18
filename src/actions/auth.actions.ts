import { bindActionCreators } from 'redux';
import { User } from '../models/User';
import { store } from '../store';
import {ME_FETCH, ME_LOGIN} from './actions.constants'


const meFetchedAction = (u: User) => ({
  type: ME_FETCH,
  payload: u,
});

const meLoginAction = (u: User) => ({
  type: ME_LOGIN,
  payload: u,
});

export const authActions = bindActionCreators(
  {
    fetched: meFetchedAction,
    login: meLoginAction,
  },
  store.dispatch
);
