import { createSelector } from 'reselect';
import {
  groupByIdSelector,
  groupQueryMapSelector,
  groupQuerySelector,
} from './constants.selectors';

export const currentGroupsSelector = createSelector(
  [
    groupQuerySelector,
    groupQueryMapSelector,
    groupByIdSelector,
  ],
  (query, queryMap, byId) => {
    const groupsIds = queryMap[query] || [];
    const groups = groupsIds.map(
      (id) => byId[id]
    );
    return groups;
  }
);

// first approach

// export const groupQuerySelector = (state: AppState) => state.groups.query;

// export const currentGroupsSelector = (state: AppState) => {
//     const groupsIds =
//       state.groups.queryMap[state.groups.query] ||
//       [];
//     const groups = groupsIds.map(
//       (id) => state.groups.byId[id]
//     );
//     return groups;
//   }

// second approach

// export const groupQuerySelector = (state: AppState) => {
//   const groupState = groupStateSelector(state);
//   return groupState.query;
// }

// export const groupQueryMapSelector = (
//   state: AppState
// ) => {
//   const groupState = groupStateSelector(state);
//   return groupState.queryMap;
// };

// export const groupByIdSelector = (
//   state: AppState
// ) => {
//   const groupState = groupStateSelector(state);
//   return groupState.byId;
// };

// export const currentGroupsSelector = (
//   state: AppState
// ) => {
//   const query = groupQuerySelector(state);
//   const queryMap = groupQueryMapSelector(state);
//   const byId = groupByIdSelector(state);
//   const groupsIds = queryMap[query] || [];
//   const groups = groupsIds.map((id) => byId[id]);
//   return groups;
// };
