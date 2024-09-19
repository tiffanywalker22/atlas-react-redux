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
        moveCard: (state, action: PayloadAction<{ sourceListId: string; targetListId: string; cardId: string; }>) => {
            const { sourceListId, targetListId, cardId } = action.payload;
            const sourceList = state.lists.find(list => list.id === sourceListId);
            if (sourceList) {
                sourceList.cardIds = sourceList.cardIds.filter(id => id !== cardId);
            }

            const targetList = state.lists.find(list => list.id === targetListId);
            if (targetList) {
                targetList.cardIds.push(cardId);
            }
        },

        clearBoard: (state) => {
            state.lists = [];
            state.cards = {};
        },
    },
});

export const { addList, deleteList, addCardToList, moveCard, clearBoard } = listSlice.actions;

export default listSlice.reducer;
