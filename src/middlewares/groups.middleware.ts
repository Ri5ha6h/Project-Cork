 import axios from 'axios';
// import { useDispatch } from 'react-redux';
// import { queryChangedAction, queryCompletedAction } from '../actions/groups.actions';
// import {
//   GroupRequest,
//   fetchGroups as fetchGroupsApi,
// } from '../api/groups';
// // import { groupsActions } from '../actions/groups.actions';
// import { groupQueryMapSelector } from '../selectors/constants.selectors';
// import { store } from '../store';

// // let canceler : Canceler | undefined;


// export const fetchGroups = (
//   request: GroupRequest
// ) => {
//   const queryMap = groupQueryMapSelector(
//     store.getState()
//   );
//   //const queryLoading = groupLoadingQuerySelector(store.getState());
  
//   const query = request.query;
//   const groupIds = queryMap[query];
//   const dispatch = useDispatch();
//   //const loading = queryLoading[query];



//   // groupsActions.queryChanged(query, !groupIds);
//   dispatch(queryChangedAction(query, !groupIds));
//   //groupsActions.query(query);

//   if (groupIds) {
//     return;
//   }
//   //if(loading){
//   //     return;
//   // }

//     // canceler && canceler();
 
//   // const {cancel, token} = axios.CancelToken.source();

//   // canceler = cancel;

//   fetchGroupsApi(request).then((groups) => {
//     // groupsActions.queryCompleted(
//     //   query,
//     //   groups || []
//     // );
//     dispatch(queryCompletedAction(
//       query,
//       groups || []
//     ));
//   });

//   // fetchGroupsApi(request).then((groups, token) => {
//   //     groupsActions.queryCompleted(query, groups || []);
//   // canceler = undefined;
//   // })
// };
