import { Col, Row, Button } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCartAction } from '../redux/actions/actions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Cart = () => {
	const myCart = useSelector((state) => {
		return state.cart.content;
	});

	const availableBooks = useSelector((state) => {
		return state.books.available;
	});
	const userName = useSelector((state) => {
		return state.user.name;
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		if (!userName) {
			navigate('/');
		}
	});

	return (
		<Row>
			<Col sm={12}>
				<ul style={{ listStyle: 'none' }}>
					{myCart.map((book, i) => (
						<li key={i} className='my-4'>
							<Button
								variant='danger'
								onClick={() => {
									dispatch(removeFromCartAction(book.id));
								}}
							>
								<FaTrash />
							</Button>
							<img
								className='book-cover-small'
								src={book.imageUrl}
							/>
							{book.title}
						</li>
					))}
				</ul>
			</Col>
			<Row>
				<Col sm={12} className='fw-bold mb-3'>
					TOTALE:{' '}
					{myCart.reduce(
						(acc, value) => acc + parseFloat(value.price),
						0,
					)}
				</Col>
			</Row>
			<Row>
				<Col sm={12} className='fw-bold mb-3'>
					<p>Libri disponibili: {availableBooks.length}</p>
				</Col>
			</Row>
		</Row>
	);
};

export default Cart;
