/*******************************
 * QuoteBox is the main visible div box in the 
 *          middle of the page.  It contains the quote, author,
 *          and buttons for tweet, tumblr and new quote
 * 
 *******************************/

import React from 'react';

import styles from '../helpers/styles';

import {Author} from './Author';
import {ButtonRow} from './ButtonRow';



export class QuoteBox extends React.Component {
    render(){
        return (
            <div id='quote-box'
                style={{...styles.QuoteBox,...{color:this.props.color}}}>
        <h1 id='text'><i className='fa fa-quote-left' /> {this.props.quote}</h1>
        <Author author={this.props.author}/>
        <ButtonRow 
            color={this.props.color}
            getNewQuote={this.props.getNewQuote}
            handleTweet={this.props.handleTweet}
            handleTumblr={this.props.handleTumblr}/>
        </div>);
    }
};