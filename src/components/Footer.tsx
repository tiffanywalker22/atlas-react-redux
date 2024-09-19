import React from 'react';
import { useAppDispatch } from '../store';
import { addList, clearBoard } from '../slices/listsSlice';

const Footer: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleAddList = (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const title = (form.elements.namedItem('title') as HTMLInputElement).value;
        
        if (title) {
            dispatch(addList({ title }));
            form.reset();
        }
    };

    return (
        <footer className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8">
            <form onSubmit={handleAddList}>
            <input
                type="text"
                placeholder="List title"
                name="title"
                className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none" />
                <button 
                type="submit"
                className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light "
                style={{ marginRight: '10px' }}>
                    Save
                </button>
                <button
                onClick={() => dispatch(clearBoard())}
                type="button"
                className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light">
                    Clear board
                </button>
                </form>
        </footer>
    );
};
export default Footer;
