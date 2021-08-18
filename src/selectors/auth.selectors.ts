import { createSelector } from 'reselect';
import { authIdSelector, userByIdSelector } from './constants.selectors';



export const meSelector = createSelector(
  [authIdSelector, userByIdSelector],
  (id, byId) => {
    return id !== undefined ? byId[id]: undefined  ;
  }
);

// export const meSelector = (state: AppState) =>
//   state.auth.id === undefined
//     ? undefined
//     : state.users.byId[state.auth.id];
