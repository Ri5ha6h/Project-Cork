import {
  takeEvery,
  call,
  put,
} from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import { GROUPS_QUERY_CHANGED } from '../actions/actions.constants';
import { fetchGroups as fetchGroupsApi } from '../api/groups';
import { queryCompletedAction } from '../actions/groups.actions';

function* fetchGroups(
  action: AnyAction
): Generator<any> {
  const groups: any = yield call(fetchGroupsApi, {
    query: action.payload,
    status: 'all-groups',
  });

  yield put(
    queryCompletedAction(action.payload, groups)
  );
}

export function* watchGroupQueryChanged() {
  yield takeEvery(
    GROUPS_QUERY_CHANGED,
    fetchGroups
  );
}
