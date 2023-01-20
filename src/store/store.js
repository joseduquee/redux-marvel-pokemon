import { configureStore } from '@reduxjs/toolkit';
import { todosApi } from './apis/todosApi';
import { counterSlice } from './slices/counter/counterSlice';
import { pokemonSlice } from './slices/pokemon';
import { personajesSlice } from './slices/marvel/marvelSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer,
    marvel: personajesSlice.reducer,

    [todosApi.reducerPath]: todosApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(todosApi.middleware)
})