import Book from './Book';

const BookList = ({ bookSelected, changeBook, books }) => (
	<div className='mb-3'>
		{books.map((book) => (
			<Book
				key={book.id}
				book={book}
				changeBook={changeBook}
				bookSelected={bookSelected}
			/>
		))}
	</div>
);

export default BookList;
