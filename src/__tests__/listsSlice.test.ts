import { describe, it, expect } from 'vitest';
import listReducer, { addList, deleteList, addCardToList, moveCard, clearBoard } from '../slices/listsSlice';

describe('listsSlice', () => {
    it('should add to a list', () => {
        const initialState = { lists: [], cards: {} };
        const state = listReducer(initialState, addList({ title: 'The New List'}));
        const addToList = state.lists.find(list => list.title === 'The New List')

        expect(state.lists).toHaveLength(1);
        expect(addToList).not.toBeUndefined();
        expect(addToList?.title).toBe('The New List');
    });

    it('should delete a list by the ID', () => {
        const initialState = {
            lists: [{ id: '1234', title: 'List', cardIds: [] }],
            cards: {}
        };

        const state = listReducer(initialState, deleteList('1234'));
        const listExists = state.lists.some(list => list.id === '1234');

        expect(state.lists).toHaveLength(0);
        expect(listExists).toBe(false);
    });

    it('should add a card to a list', () => {
        const initialState = {
            lists: [{ id: '4321', title: 'Another List', cardIds: [] }],
            cards: {}
        };

        const newCard = { id: '5678', title: 'Card', description: 'The Card' };
        const state = listReducer(initialState, addCardToList({ listId: '4321', card: newCard}));

        const updatedList = state.lists.find(list => list.id === '4321');

        expect(state.cards).toHaveProperty(newCard.id, newCard);
        expect(updatedList?.cardIds).toContain(newCard.id);
    });

    it('should move a card from one list to another list', () => {
        const initialState = {
            lists: [
                { id: 'source-list', title: 'Source List', cardIds: ['card-name'] },
                { id: 'target-list', title: 'Target List', cardIds: [] }
            ],
            cards: { 'card-name': { id: 'card-name', title: 'Card', description: 'Card Description'} }
        };

        const action = moveCard({ sourceListId: 'source-list', targetListId: 'target-list', cardId: 'card-name' });
        const state = listReducer(initialState, action);

        expect(state.lists.find(list => list.id === 'source-list')?.cardIds).not.toContain('card-name');
        expect(state.lists.find(list => list.id === 'target-list')?.cardIds).toContain('card-name');

    })

    it('should clear all lists and cards', () => {
        const initialState = {
            lists: [{ id: '22', title: 'List Name', cardIds: ['222'] }],
            cards: { '222': { id: '222', title: 'Card Name', description: 'A Card Name'} }
        };

        const state = listReducer(initialState, clearBoard());

        expect(state.lists).toHaveLength(0);
        expect(state.cards).toEqual({});

    });
        
});
