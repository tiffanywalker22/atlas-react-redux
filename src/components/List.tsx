import React from 'react';
import Card from './Card';
import DeleteListButton from './DeleteListButton';
import NewCardForm from './NewCardForm';

interface ListProps {
    title: string;
    cards: { title: string; description: string }[];
}

const List: React.FC<ListProps> = ({ title, cards }) => (
    <div className="group/list h-full min-w-96 p-4">
        <DeleteListButton />
        <h3>{title}</h3>
        {cards.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
        ))}
        <NewCardForm />
    </div>
);

export default List;
