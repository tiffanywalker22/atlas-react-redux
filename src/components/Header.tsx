import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 border-b-2 border-blue bg-off-white-light pb-8 pt-8">
            <img className="logo mx-auto w-56" src="../assets/logo.png" alt="logo" />
        </header>
    );
};

export default Header;
