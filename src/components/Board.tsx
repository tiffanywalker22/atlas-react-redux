import React from 'react';
import List from './List';
import { useAppDispatch, useAppSelector } from '../store';
import { deleteList } from '../slices/listsSlice';

const Board: React.FC = () => {
    const dispatch = useAppDispatch();
    const lists = useAppSelector(state => state.Lists.lists);
    const cards = useAppSelector(state => state.Lists.cards);

    const handleDeleteList = (id: string) => {
        dispatch(deleteList(id));
    };

    return (
        <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
            <div className="flex h-full space-x-4">
                {lists.map(list => (
                    <List key={list.id} id={list.id} title={list.title} cards={list.cardIds.map(cardId => cards[cardId])} onDelete={handleDeleteList} />
                ))}
            </div>
        </div>
    );
};

export default Board;
