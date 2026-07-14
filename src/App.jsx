import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import BookStore from './components/BookStore';
import Cart from './components/Cart';
import Footer from './components/Footer';
import CartIndicator from './components/CartIndicator';
import { useEffect } from 'react';

// Importazioni per Redux: lista libri e useDispatch per chiamare le actions
import { useDispatch } from 'react-redux';
import { getBooksAction } from './redux/actions/actions';

function App() {
	// App si occupa di recuperare la lista libri e quindi di chiamare l'azione corrispondente perchè si aggiorni lo stato
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getBooksAction());
	}, []);

	return (
		<BrowserRouter>
			<Container className='epizon-container'>
				<Row>
					<Col className='text-center background-div'>
						<Link to='/'>
							<h1>BOOK STORE</h1>
						</Link>
					</Col>
					<CartIndicator />
				</Row>
				<Routes>
					<Route path='/' element={<BookStore />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
				<Footer />
			</Container>
		</BrowserRouter>
	);
}
export default App;
