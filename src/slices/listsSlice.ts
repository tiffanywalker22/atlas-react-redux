import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Card {
    id: string;
    title: string;
    description: string;
}

interface List {
    id: string;
    title: string;
    cardIds: string[];
}

interface ListsSate {
    lists: List[];
    cards: Record<string, Card>;
}

const initialState: ListsSate = {
    lists: [],
    cards: {},
};

export const listSlice = createSlice({
    name: "Lists",
    initialState,
    reducers: {
        addList: (state, action: PayloadAction<{ title: string }>) => {
            const id = new Date().toISOString();
            state.lists.push({ id, title: action.payload.title, cardIds: [] });
        },
        deleteList: (state, action: PayloadAction<string>) => {
            state.lists = state.lists.filter(list => list.id !== action.payload);
        },
        addCardToList: (state, action: PayloadAction<{ listId: string; card: Card }>) => {
            const { listId, card } = action.payload;
            state.cards[card.id] = card;
            const list = state.lists.find(list => list.id === listId);
            if (list) {
                list.cardIds.push(card.id);
            }
        },
        clearBoard: (state) => {
            state.lists = [];
            state.cards = {};
        },
    },
});

export const { addList, deleteList, addCardToList, clearBoard } = listSlice.actions;

export default listSlice.reducer;
