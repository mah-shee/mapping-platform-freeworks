import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from "mapbox-gl"
import './styles/index.scss';
import Map from './components/Map'
import * as serviceWorker from './serviceWorker';

mapboxgl.accessToken = 'pk.eyJ1IjoidGFrYW5vcmlmdWt1eWFtYSIsImEiOiJjanQybTAxc3UwamVrNDRsdm84OHVqdmxhIn0.jcgc3xIqdApUUed_5cexUw'

ReactDOM.render(<Map />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
