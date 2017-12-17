/*******************************
 * TweetButton is the small button to post to twitter
 * 
 *******************************/
import React from 'react';

import styles from '../helpers/styles';

export class TweetButton extends React.Component{

    render(){
 
        return(
            <div
            style={{...styles.smallButton,...{background:this.props.color}}}
            onClick={this.props.handleTweet}>
            <a id='tweet-quote' href='twitter.com/intent/tweet/'
                style=
                {{color:'#ffffff'}}>
            <i className='fa fa-twitter' />
            </a>
            </div>
        );
    }
};