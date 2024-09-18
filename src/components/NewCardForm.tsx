import React, { useState } from 'react';
import { useAppDispatch } from '../store';
import { addCardToList } from '../slices/listsSlice';

interface NewCardFormProps {
    listId: string;
}

const NewCardForm: React.FC<NewCardFormProps> = ({ listId }) => {
    const dispatch = useAppDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (title) {
            const newCard = {
                id: new Date().toISOString(),
                title,
                description,
            };

            dispatch(addCardToList({ listId, card: newCard }));
            setTitle('');
            setDescription('');
        }
    };

    return (
        <div className="group/new-card m-3 flex h-44 w-full justify-center">
            <form
                onSubmit={handleSubmit}
                className="hidden min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex"
            >
                <input
                    className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none"
                    placeholder="Title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    autoFocus
                />
                <textarea
                    className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none"
                    placeholder="Description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <div className="w-full">
                    <button type="submit" className="w-full p-4">Save</button>
                </div>
            </form>
        </div>
    );
};

export default NewCardForm;
