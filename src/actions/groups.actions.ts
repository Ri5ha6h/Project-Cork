import { bindActionCreators } from 'redux';
import { Group } from '../models/Group';
import { store } from '../store';
import {
  GROUPS_QUERY_CHANGED,
  GROUPS_QUERY_COMPLETED,
} from './actions.constants';

// const queryAction = (query: string) => ({
//   type: GROUPS_QUERY,
//   payload: query,
// });

export const queryChangedAction = (
  query: string
) => ({
  type: GROUPS_QUERY_CHANGED,
  payload: query,
});

export const queryCompletedAction = (
  query: string,
  groups: Group[]
) => ({
  type: GROUPS_QUERY_COMPLETED,
  payload: { query, groups },
});

// export const groupsActions = bindActionCreators(
//   {
//     queryChanged: queryChangedAction,
//     queryCompleted: queryCompletedAction,
//   },
//   store.dispatch
// );
