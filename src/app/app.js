import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppRoutes from './routes';

injectTapEventPlugin();

render(<AppRoutes />, document.getElementById('app'));
