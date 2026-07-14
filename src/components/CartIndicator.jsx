import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setUsernameAction } from '../redux/actions/actions';

const CartIndicator = () => {
	const navigate = useNavigate();

	const [value, setValue] = useState('');
	const dispatch = useDispatch();

	const cartLength = useSelector((state) => {
		return state.cart.content.length;
	});
	const name = useSelector((state) => {
		return state.user.name;
	});

	return (
		<div className='d-flex justify-content-end my-4'>
			{name ? (
				<span className='d-flex align-items-center'>
					<span className='me-2'>Benvenuto, {name}</span>
					<Button
						onClick={() => navigate('/cart')}
						className='d-flex align-items-center'
					>
						<FaShoppingCart />
						<span className='ms-2'>{cartLength}</span>
					</Button>
				</span>
			) : (
				<Form
					className='d-flex'
					onSubmit={(e) => {
						e.preventDefault();
						if (!value.trim()) {
							return;
						}
						dispatch(setUsernameAction(value));
					}}
				>
					<Form.Control
						type='text'
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
						}}
						required
					/>
					<Button variant='primary' type='submit'>
						VAI
					</Button>
				</Form>
			)}
		</div>
	);
};

export default CartIndicator;
