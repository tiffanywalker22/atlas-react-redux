import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Card {
    id: string;
    title: string;
    description: string;
}

interface CardsState {
    cards: Record<string, Card>;
}

const initialState: CardsState = {
    cards: {},
};

const cardsSlice = createSlice ({
    name: "Cards",
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<Card>) => {
            const card = action.payload;
            state.cards[card.id] = card;
        },
        deleteCard: (state, action: PayloadAction<string>) => {
            delete state.cards[action.payload];
        },
    },
});

export const { addCard, deleteCard } =cardsSlice.actions;

export default cardsSlice.reducer;
