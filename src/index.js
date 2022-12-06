import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './Components/App';
import './Components/Styles/reset.css';

//React 18
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab='home' />);

//React 17
//render(<App />, document.getElementById('root'));
