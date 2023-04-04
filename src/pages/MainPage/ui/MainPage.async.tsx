import { lazy } from 'react';

export const MainPageAsync = lazy(() => import('./MainPage'));
// export const TemplatesPageAsync = lazy(
//     () =>
//         new Promise((resolve) => {
//             // @ts-ignore
//             // dont do this
//             setTimeout(() => resolve(import('./TemplatesPage')), 1500);
//         }),
// );
