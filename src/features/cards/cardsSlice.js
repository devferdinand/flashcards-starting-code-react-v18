import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {}
    },
    reducers: {
        addCard: (state, action) => {
            const { id } = action.payload;
            state.cards[id] = action.payload;
        }
    }
});

export const selectCard = (id) => (state) => state.cards.cards[id];
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;