/*******************************
 * NewQuoteButton is the 'New Quote' button that gets a 
 *              new quote
 * 
 *******************************/
import React from 'react';

import styles from '../helpers/styles';

export class NewQuoteButton extends React.Component{
   
    render(){
      //  styles.background = this.props.color;
        return(
            <div id='new-quote'
                style={{...styles.largeButton,...{background:this.props.color}}}
                onClick={this.props.getNewQuote}>
             <p>New Quote</p>
            </div>
        );
    }
};