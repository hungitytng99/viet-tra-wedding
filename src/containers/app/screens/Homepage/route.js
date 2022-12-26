import { lazy } from 'react';
import AppLayout from '~/components/Layout/AppLayout';
import { initModules } from '~/router/index';

export const featureModule = {
    key: 'homepage',
    path: 'Homepage',
};

export default {
    path: '/',
    exact: true,
    isPrivate: false,
    layout: AppLayout,
    component: lazy(async () => {
        await initModules([featureModule], 'app');
        return import('./pages/Home');
    }),
};

export const childRoutes = [];
