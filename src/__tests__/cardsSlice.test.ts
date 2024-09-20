import { describe, it, expect } from 'vitest';
import cardsReducer, { addCard, deleteCard, clearBoard } from '../slices/cardsSlice';

describe('cardsSlice', () => {
    const card = { id: '1234', title: 'Card Name', description: 'The Card Name' };

    it('should add a card', () => {
        const initialState = { cards: {} };
        const action = addCard(card);
        const state = cardsReducer(initialState, action);
        expect(state.cards[card.id]).toEqual(card);
    });

    it('should delete a card', () => {
        const initialState = { cards: { '4321': card } };
        const action = deleteCard('4321');
        const state = cardsReducer(initialState, action);
        expect(state.cards['4321']).toBeUndefined();
    });

    it('should clear all the cards', () => {
        const initialState = { cards: { '22': card } };
        const action = clearBoard();
        const state = cardsReducer(initialState, action);
        expect(state.cards).toEqual({});
    });
});
