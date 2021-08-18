import { createSelector } from 'reselect';
import {
  authStateSelector,
  groupStateSelector,
  userStateSelector,
} from './app.selectors';

//auth selectors
export const authIdSelector = createSelector(
  [authStateSelector],
  (authState) => authState.id
);

// users selectors
export const userByIdSelector = createSelector(
  [userStateSelector],
  (userState) => userState.byId
);

//groups selectors

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
);

export const groupByIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);

// export const groupLoadingQuerySelector = createSelector(
//   [groupStateSelector],
//   (groupState) => groupState.loadingQuery
// )

// export const groupLoadingSelector = createSelector(
//   [groupQuerySelector, groupLoadingQuerySelector],
//   (query, loadingMap) => loadingMap[query]
// )

export const groupsLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loading
)
