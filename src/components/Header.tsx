import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="bg-primary bg-blue-600 text-white p-4">
            <div className="container mx-auto flex flex-wrap justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <Link to="/">BookReview</Link>
                </h1>
                <button
                    className="text-white block lg:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                <nav className={`lg:flex ${menuOpen ? 'block' : 'hidden'} lg:items-center lg:space-x-4`}>
                    <Link to="/" className="text-white hover:text-secondary block lg:inline-block mx-2 py-2">Home</Link>
                    <Link to="/books" className="text-white hover:text-secondary block lg:inline-block mx-2 py-2">Books</Link>
                    <Link to="/login" className="text-white hover:text-secondary block lg:inline-block mx-2 py-2">Login</Link>
                    <form onSubmit={handleSearch} className="flex lg:ml-4 mt-4 lg:mt-0">
                        <input
                            type="text"
                            placeholder="Search books..."
                            className="px-3 py-1 rounded"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="ml-2 bg-white text-blue-600 px-3 py-1 rounded"
                        >
                            Search
                        </button>
                    </form>
                </nav>
            </div>
        </header>
    );
};

export default Header;
