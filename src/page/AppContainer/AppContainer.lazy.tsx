import { lazy } from 'react';

const AppComponentPageLazy = lazy(() => import('./AppComponent.page'));

export default AppComponentPageLazy;
