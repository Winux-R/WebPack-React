import React from 'react';
import Hello from './Component.jsx';
import ReactDom from "react-dom";
main();

function main() {
    ReactDom.render(<Hello />, document.getElementById('app'));
}