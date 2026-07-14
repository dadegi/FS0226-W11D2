import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import store from './redux/store/store.js';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
	// Il componente Provider di Redux circonda App, quindi lo store sarà a ddisposizione di tutti i component avviati direttamente o indirettamente da App, cioè tutti
	<Provider store={store}>
		<App />
	</Provider>,
);
