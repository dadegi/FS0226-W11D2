// importo il nome della acttion che sarà chiamata da un component (BookList)
import { GET_BOOKS } from '../actions/actions';

// Imposto lo stato iniziale
const initialState = {
	available: [],
};

// Imposto il metodo per cambiare lo stato: nel payload il metodo riceverà l'array dei libri, lo scriverà in available e lo passerà allo store
const bookReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_BOOKS:
			return { ...state, available: action.payload };

		default:
			return state;
	}
};

export default bookReducer;
