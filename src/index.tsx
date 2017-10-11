import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import {TestComponent} from './components/TestComponent/TestComponent';

if (module.hot) module.hot.accept();

ReactDOM.render(<TestComponent />, document.getElementById('app'));
