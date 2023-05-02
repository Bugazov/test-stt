import { createSelector } from '@reduxjs/toolkit';
export var getScrollSave = function (state) { return state.scrollSave.scroll; };
export var getScrollByPath = createSelector(getScrollSave, function (state, path) { return path; }, function (scroll, path) { return scroll[path] || 0; });
