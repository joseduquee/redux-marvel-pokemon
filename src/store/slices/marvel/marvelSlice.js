import { createSlice } from '@reduxjs/toolkit';

export const personajesSlice = createSlice({
    name: 'personajes',
    initialState: {
        page: 0,
        personajes: [],
        isLoading: false,
        limit: 50,
        total: 0
    },
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },

        setPersonajes: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.personajes = action.payload.personajes;
            state.total = action.payload.total
        },
    }
});


// Action creators are generated for each case reducer function
export const { startLoading, setPersonajes } = personajesSlice.actions;