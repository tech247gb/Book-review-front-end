import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import BookReviewCard from './BookReviewCard';
import Modal from './Modal';
import { Book } from '../types/Book';
import FullScreenBanner from '../components/FullScreenBanner';

const books: Book[] = [
    {
        id: 1,
        title: 'Book One',
        author: 'Author One',
        review: 'This is a great book! The storyline was gripping and the characters were well developed. I particularly enjoyed the twist at the end and the writing style kept me engaged throughout the book. Highly recommend it to anyone who loves mystery and thrillers.',
        coverImage: 'https://images.unsplash.com/photo-1527176930608-09cb256ab504?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max',
        rating: 4,
    },
    {
        id: 2,
        title: 'Book Two',
        author: 'Author Two',
        review: 'This is another great book! The plot was intriguing and the pacing was perfect. I couldn\'t put it down until I finished it. The author did an amazing job with the character development and the setting was beautifully described. A must-read for fantasy lovers.',
        coverImage: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max',
        rating: 5,
    },
    {
        id: 3,
        title: 'Book Three',
        author: 'Author Three',
        review: 'A very interesting read. The author has a unique voice and the story was quite original. I appreciated the depth of the themes explored in the book. Although the beginning was a bit slow, it picked up pace and ended on a high note.',
        coverImage: 'https://images.unsplash.com/photo-1503365070998-37e56a2606e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMjB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI1MDg5MjV8&ixlib=rb-4.0.3&q=80&w=800',
        rating: 3,
    },
    {
        id: 4,
        title: 'Book Four',
        author: 'Author Four',
        review: 'Loved the characters and story. The interactions between the characters felt real and the story had many layers. The author did a fantastic job of weaving together different plotlines and keeping the reader engaged. Definitely a book I would read again.',
        coverImage: 'https://images.unsplash.com/photo-1490633874781-1c63cc424610?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzkyMjB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjI1MDkxNzB8&ixlib=rb-4.0.3&q=80&w=800',
        rating: 4,
    },
    {
        id: 11,
        title: 'Book Eleven',
        author: 'Author Eleven',
        review: 'Well worth the read. The story was engaging and the characters were well-drawn. The author did a great job of creating a believable world and the plot kept me guessing. A highly enjoyable read that I would recommend to others.',
        coverImage: 'https://via.placeholder.com/600x200/16A085/FFFFFF?text=Book+Eleven',
        rating: 4,
    },
    {
        id: 12,
        title: 'Book Twelve',
        author: 'Author Twelve',
        review: 'Great insights and perspective. The author has a A bit slow in the beginning but picks up. Once the story got goingA bit slow in the beginning but picks up. Once the story got goingA bit slow in the beginning but picks up. Once the story got goingA bit slow in the beginning but picks up. Once the story got goingA bit slow in the beginning but picks up. Once the story got goingA bit slow in the beginning but picks up. Once the story got goingA bit slow in the beginning but picks up. Once the story got goingA bit slow in the beginning but picks up. Once the story got goingA bit slow in the beginning but picks up. Once the story got goingA bit slow in the beginning but picks up. Once the story got goingA bit slow in the beginning but picks up. Once the story got goingdeep understanding of the subject matter and it shows in the writing. I found the book to be both thought-provoking and informative. A great addition to any bookshelf.',
        coverImage: 'https://via.placeholder.com/600x200/27AE60/FFFFFF?text=Book+Twelve',
        rating: 4,
    },
];

const PAGE_SIZE = 6;

const BookList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    useEffect(() => {
        if (selectedBook) {
            document.body.classList.add('modal-open');
        } else {
            document.body.classList.remove('modal-open');
        }
    }, [selectedBook]);

    const handlePageChange = (selectedPage: { selected: number }) => {
        setCurrentPage(selectedPage.selected);
    };

    const handleViewMore = (book: Book) => {
        setSelectedBook(book);
    };

    const handleCloseModal = () => {
        setSelectedBook(null);
    };

    const paginatedBooks = books.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);

    return (<div>
        <FullScreenBanner
            backgroundImage="https://source.unsplash.com/books/1920x1080"
            title="Welcome to Our Book Review Platform"
            subtitle="Discover your next great read"
        />
        <div className="container mx-auto py-10 px-4">
            <h2 className="text-4xl font-bold mb-6 text-center text-primary">Book Reviews</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedBooks.map((book) => (
                    <BookReviewCard
                        key={book.id}
                        book={book}
                        onViewMore={handleViewMore}
                    />
                ))}
            </div>
            <div className="mt-8 flex justify-center">
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'Next'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(books.length / PAGE_SIZE)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakClassName={'page-item'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
            </div>
            {selectedBook && (
                <Modal show={Boolean(selectedBook)} onClose={handleCloseModal} book={selectedBook} />
            )}
        </div>
    </div>

    );
};

export default BookList;
