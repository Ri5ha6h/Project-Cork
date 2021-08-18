import {
  TypedUseSelectorHook,
  useSelector,
} from 'react-redux';
import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
import { groupReducer } from './reducers/groups.reducer';
import { userReducer } from './reducers/users.reducer';
import { authReducer } from './reducers/auth.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sagaMiddleware } from './sagas';
import { watchGroupQueryChanged } from './sagas/group.sagas';

// export interface AppState {
//   auth: AuthState;
//   users: UserState;
//   groups: GroupState;
// }

const reducer = combineReducers({
  users: userReducer,
  groups: groupReducer,
  auth: authReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(watchGroupQueryChanged);

export type AppState = ReturnType<
  typeof store.getState
>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
