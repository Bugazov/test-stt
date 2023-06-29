import React, {
    memo, Suspense, useCallback, useMemo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { getUserAuthData } from '@/entities/User';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';
import { routeConfig } from '@/app/providers/router/config/routeConfig';
import { AppRoutes } from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route:AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );

        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (

        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);
