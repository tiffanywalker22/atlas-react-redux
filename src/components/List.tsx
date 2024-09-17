import React from 'react';
import Card from './Card';
import DeleteListButton from './DeleteListButton';
import NewCardForm from './NewCardForm';

interface ListProps {
    id: string;
    title: string;
    cards: { id: string; title: string; description: string }[];
    onDelete: (id: string) => void;
}

const List: React.FC<ListProps> = ({ id, title, cards, onDelete }) => {
    const handleDeleteList = () => {
        onDelete(id);
    };
    return (
        <div className="group/list h-full min-w-96 p-4">
            <DeleteListButton onClick={handleDeleteList} />
            <h3>{title}</h3>
            {cards.map(card => (
                <Card key={card.id} title={card.title} description={card.description} />
            ))}
            <NewCardForm />
        </div>
    );
};

export default List;
