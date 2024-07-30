import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Book {
    id: number;
    title: string;
    author: string;
    review: string;
}

const allBooks: Book[] = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', review: 'A classic novel about the American dream.' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', review: 'A profound novel on racial injustice.' },
    { id: 3, title: '1984', author: 'George Orwell', review: 'A dystopian novel about a totalitarian regime.' },
];

const SearchResults: React.FC = () => {
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query') || '';

    useEffect(() => {
        if (query.trim()) {
            setFilteredBooks(
                allBooks.filter((book) =>
                    book.title.toLowerCase().includes(query.toLowerCase())
                )
            );
        } else {
            setFilteredBooks([]);
        }
    }, [query]);

    return (
        <div className="container mx-auto py-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Search Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <div key={book.id} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                            <p className="text-gray-700 mb-1"><strong>Author:</strong> {book.author}</p>
                            <p className="text-gray-700"><strong>Review:</strong> {book.review}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-center">No results found for "{query}".</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;
