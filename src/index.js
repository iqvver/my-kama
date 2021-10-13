import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import StyledEngineProvider from '@mui/styled-engine/StyledEngineProvider';
import '@fontsource/roboto/500.css';

ReactDOM.render(
    <StyledEngineProvider injectFirst>
        <HashRouter> {/*пока тут HashRouter чтоб на гите нормально работало*/}
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </StyledEngineProvider>, document.getElementById('root'));

reportWebVitals();
