import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/Store/Store';
import reportWebVitals from './reportWebVitals';
import './Theme/theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
 export let rerenderEntireTree = () => {
root.render(
 
<BrowserRouter>
    <Provider store={store} >      
    <App />
   </Provider> 
</BrowserRouter>
);
}
rerenderEntireTree()
reportWebVitals();