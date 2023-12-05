import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './reducers/projectsSlice';
import localeReducer from './reducers/localeSlice';

const store = configureStore({
    reducer: {
        projects: projectsReducer,
        locale: localeReducer,
    },
});

export default store;