import { createSelector } from 'reselect';
import {
  authIdSelector,
  userByIdSelector,
} from './constants.selectors';

// export const firstNameSelector = createSelector([userByIdSelector, authIdSelector], (byId, id)=> {
//     return byId[id!].first_name;
// })

export const firstNameSelector = createSelector(
  [authIdSelector, userByIdSelector],
  (id, byId) => {
    return byId[id!].first_name;
  }
);

// export const firstNameSelector = (state: AppState) =>
//   state.users.byId[state.auth.id!].first_name;
