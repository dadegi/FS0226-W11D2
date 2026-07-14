// Qui ci saranno tutte le indicazioni per i reducers, cioè le chiamate alle funzioni di modifica dello stato
// LE actions vanno esportate per poter essere importate dai components che le useranno

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SET_USERNAME = 'SET_USERNAME';
export const GET_BOOKS = 'GET_BOOKS';

// action creators: funzioni che ritornano un'AZIONE

export const addToCartAction = (bookSelected) => {
	return {
		type: ADD_TO_CART, // Nome a scelta, possibilmente parlante
		payload: bookSelected, // Il valore che il reducer corrispopndente userà per modificare la sua fetta di stato
	};
};

export const removeFromCartAction = (id) => {
	return {
		type: REMOVE_FROM_CART,
		payload: id,
	};
};

export const setUsernameAction = (value) => {
	return {
		type: SET_USERNAME,
		payload: value,
	};
};

// fetch per il recupero dei libri e per la gestione del carrello. Per entrambe va usata la funzione dispatch di Redux perché il risultato della fetch andrà SPEDITO al reducer, che si occuperà di aggiornare lo stato corrispondente, il libro inserito nel carrello andrà spedito al reducer che si occuperà di aggiornare lo stato ([]). In questo modo le action diventano asincrone, conservando sincroni, prevedibili e immutabili i reducers

export const addToCartLimit = (bookSelected) => {
	return (dispatch, getState) => {
		// ritornando una funzione, prima di chiamare il reducer possiamo inserire la logica che ci serve, in una funziona JavaScript pura
		if (getState().cart.content.length < 5) {
			dispatch({
				type: ADD_TO_CART,
				payload: bookSelected,
			});
		} else {
			alert('CARRELLO PIENO!');
		}
	};
};

export const getBooksAction = () => {
	// non serve getstate perché questa fetch imposta lo stato generale dell'elenco libri
	return (dispatch) => {
		fetch('https://striveschool-api.herokuapp.com/food-books')
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Errore nel recupero dei libri');
				}
			})
			.then((booksArray) => {
				console.log(booksArray);
				dispatch({
					type: GET_BOOKS,
					payload: booksArray,
				});
			})
			.catch((err) => {
				console.log('errore: ', err);
			});
	};
};
