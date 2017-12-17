/*******************************
 * ButtonRow holds the row of buttons at the bottom of
 *          the QuoteBox (tweet, tumblr and new quote)
 * 
 *******************************/

import React from 'react';

import styles from '../helpers/styles';

import {TweetButton} from './TweetButton';
import {TumblrButton} from './TumblrButton';
import {NewQuoteButton} from './NewQuoteButton'



export class ButtonRow extends React.Component{



    render(){
        return (
            <div style={styles.ButtonRow}>
                <TweetButton 
                    color={this.props.color}
                    handleTweet={this.props.handleTweet}/>
                <TumblrButton 
                    color={this.props.color}
                    handleTumblr={this.props.handleTumblr}/>
                
                <NewQuoteButton 
                    color={this.props.color}
                        getNewQuote={this.props.getNewQuote}/>
                </div>
        );
    }
};