import { createSlice } from '@reduxjs/toolkit';
var initialState = {
    scroll: {},
};
export var scrollSaveSlice = createSlice({
    name: 'scrollSave',
    initialState: initialState,
    reducers: {
        setScrollPosition: function (state, action) {
            state.scroll[action.payload.path] = action.payload.position;
        },
    },
});
// Action creators are generated for each case reducer function
export var scrollSaveActions = scrollSaveSlice.actions;
export var scrollSaveReducer = scrollSaveSlice.reducer;
