import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import MainIcon from '@/shared/assets/icons/main-20-20.svg';
import AboutIcon from '@/shared/assets/icons/about-20-20.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import { SideBarItemType } from '../types/sidebar';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userdata) => {
        const sideBarItemsList:SideBarItemType[] = [
            {
                path: getRouteMain(),
                Icon: MainIcon,
                text: 'Главная',
            },
            {
                path: getRouteAbout(),
                Icon: AboutIcon,
                text: 'О сайте',
            },
        ];
        if (userdata) {
            sideBarItemsList.push(
                {
                    path: getRouteProfile(userdata.id),
                    Icon: ProfileIcon,
                    text: 'Профиль',
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    Icon: AboutIcon,
                    text: 'Статьи',
                    authOnly: true,
                },
            );
        }
        return sideBarItemsList;
    },

);
