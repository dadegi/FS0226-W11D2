import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import BookList from './BookList';
import BookDetails from './BookDetails';
// useSelector gestirà lo stato interno del component
import { useSelector } from 'react-redux';

const BookStore = () => {
	const [bookSelected, setBookSelected] = useState(null);

	const books = useSelector((state) => {
		return state.books.available;
	});

	const changeBook = (book) => setBookSelected(book);

	return (
		<Row className='center-row'>
			<Col lg={4}>
                <BookList bookSelected={bookSelected} changeBook={changeBook} books={books} />
            </Col>
            <Col lg={8}>
                <BookDetails bookSelected={bookSelected} />
            </Col>
		</Row>
	);
};

export default BookStore;
