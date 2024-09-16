import React from 'react';

const DeleteListButton: React.FC = () => (
    <button className="h-[30px]" onClick={() => alert('Delete list')}>
        <svg
            className="hidden h-[30px] w-[30px] cursor-pointer group-hover/list:block"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
        </svg>
    </button>
);

export default DeleteListButton;
