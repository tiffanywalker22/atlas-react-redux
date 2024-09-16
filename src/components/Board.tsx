import React from 'react';
import List from './List';

const Board: React.FC = () => {
    const lists = [
        {
            title: 'To Do',
            cards: [
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' }
            ],
        },
        {
            title: 'To Do',
            cards: [
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
                { title: 'Lorem ipsum dolor', description: 'TSed viverra, diam eu facilisis bibendum, ante orci placerat quam' }
            ],
        },
        {
            title: 'To Do',
            cards: [
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' },
                { title: 'Lorem ipsum dolor', description: 'Sed viverra, diam eu facilisis bibendum, ante orci placerat quam' }
            ],
        }
    ];

    return (
        <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
            <div className="flex h-full space-x-4">
                {lists.map((list, index) => (
                    <List key={index} title={list.title} cards={list.cards} />
                ))}
            </div>
        </div>
    );
};

export default Board;
