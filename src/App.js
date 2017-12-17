/*******************************
 * App is the main wrapper component that is rendered to the page
 * 
 *******************************/
import React, { Component } from 'react';

import './App.css';

import {QuoteBoxContainer} from './containers/QuoteBoxContainer';

let styles = {
  display:'flex',
  justifyContent:'center',
  alignContent:'center',
  height: '100vh',
  width: '100vw',
  background:'green'

}

class App extends Component {
  render() {
    return (<div style={styles}>
        <QuoteBoxContainer style={styles}/>
        </div>
    );
  }
}

export default App;
