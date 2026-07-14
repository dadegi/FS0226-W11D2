// Importo i reducers
import cartReducer from '../reducers/cartReducer';
import bookReducer from '../reducers/bookReducer';
import userReducer from '../reducers/userReducer';

// importo i metodi per gestire i tre reducers in unico metodo
import { configureStore, combineReducers } from '@reduxjs/toolkit';

// Con questo metodo unisco i tre reducers in un unico oggetto
const combine = combineReducers({
	cart: cartReducer,
	user: userReducer,
	books: bookReducer,
});

// Lo store gestisce in un unico stato quello che arriva dai tre reducers
const store = configureStore({
	reducer: combine,
});

export default store;
