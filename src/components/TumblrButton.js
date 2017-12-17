/*******************************
 * TumblrButton is the button that allows you to post 
 *          to tumblr
 * 
 *******************************/
import React from 'react';

import styles from '../helpers/styles';

export class TumblrButton extends React.Component{
    
    render(){
        //styles.background = this.props.color;
        return(
            <div 
            style={{...styles.smallButton,...{background:this.props.color}}}
            onClick={this.props.handleTumblr}>
            <i className='fa fa-tumblr' />
            </div>
        );
    }
};