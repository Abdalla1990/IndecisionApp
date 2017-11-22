import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './components/AddOption.js';
import Options from './components/Options.js';
import Action from './components/Action.js';
import Header from './components/Header.js'
import IndecisionApp from './components/IndecisionApp.js';
import 'normalize.css/normalize.css' // this module resets the css browser configurations to the default settings.
import './styles/styles.scss'; // loades the styles file which we configured webpack to read in bwepack config file.


ReactDOM.render(<IndecisionApp />,document.getElementById('app'));