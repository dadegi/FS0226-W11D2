import { Col, Row, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
// Importazioni per Redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCartLimit } from '../redux/actions/actions';

const BookDetails = ({ bookSelected }) => {
	const dispatch = useDispatch();

	const name = useSelector((state) => {
		return state.user.name;
	});

	return (
		<div className='mt-3'>
			{bookSelected ? (
				<>
					<Row>
						<Col sm={12}>
							<h1>{bookSelected.title}</h1>
						</Col>
					</Row>
					<Row className='mt-3'>
						<Col sm={4}>
							<div className='mt-3'>
								<img
									className='book-cover'
									src={bookSelected.imageUrl}
								/>
							</div>
						</Col>
						<Col sm={8}>
							<p>
								<span className='d-flex align-items-center'>
									Price:
								</span>
								&nbsp;{bookSelected.price}
							</p>
							<p>
								<span className='fw-bold'>Description:</span>
								&nbsp;{bookSelected.description}
							</p>
							{name ? (
								<Button
									className='d-flex align-items-center'
									onClick={() =>
										dispatch(addToCartLimit(bookSelected))
									}
								>
									<span className='me-2'>AGGIUNGI AL</span>
									<FaShoppingCart />
								</Button>
							) : (
								<p>Fai il login per acquistare il libro</p>
							)}
						</Col>
					</Row>
				</>
			) : (
				<Row>
					<Col sm={12}>
						<h3>Clicca su un libro per i dettagli</h3>
					</Col>
				</Row>
			)}
		</div>
	);
};

export default BookDetails;
