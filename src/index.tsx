/**
 * When compiling for web, it will search for index.js on root/src.
 */
import {createRoot} from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(<App />);
