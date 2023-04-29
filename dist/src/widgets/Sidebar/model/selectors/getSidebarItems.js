import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/User';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
export var getSidebarItems = createSelector(getUserAuthData, function (userdata) {
    var sideBarItemsList = [
        {
            path: RoutePath.main,
            Icon: MainIcon,
            text: 'Главная',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'О сайте',
        },
    ];
    if (userdata) {
        sideBarItemsList.push({
            path: RoutePath.profile + userdata.id,
            Icon: ProfileIcon,
            text: 'Профиль',
            authOnly: true,
        }, {
            path: RoutePath.articles,
            Icon: AboutIcon,
            text: 'Статьи',
            authOnly: true,
        });
    }
    return sideBarItemsList;
});
