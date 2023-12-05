import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_URL } from '@/app/utils';

export const fetchProjects = createAsyncThunk(
    'fetchProjects',
    async (localeValue, { rejectWithValue }) => {
        try {
        const response = await axios.get(`${API_URL}api/projects`, {
            params: { locale: localeValue },
        });
        return response.data;
        } catch (error) {
        return rejectWithValue(error.message);
        }
    }
);

const projectsSlice = createSlice({
    name: 'projects',
    initialState: { data: [], loading: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchProjects.pending, (state) => {
            state.loading = 'loading';
        })
        .addCase(fetchProjects.fulfilled, (state, action) => {
            state.loading = 'succeeded';
            state.data = action.payload;
        })
        .addCase(fetchProjects.rejected, (state, action) => {
            state.loading = 'failed';
            state.error = action.payload;
        });
    },
});

export default projectsSlice.reducer;
