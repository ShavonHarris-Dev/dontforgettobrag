import { createRoot } from 'react-dom/client';
import {ThemeProvider}
import App from './App';

createRoot(document.getElementById('root')).render(
<ThemeProvider>
    <App />
</ThemeProvider>
);
