import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter.js';
import authReducer from './auth.js';

const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer },
});

export default store;


// NEVER MUTATE THE STATE, ALWAYS OVERRIDE IT -> Mutating it can cause unwanted errors and bugs!!!
