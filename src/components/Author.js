import React from 'react';

import styles from '../helpers/styles';

/*let styles = {
    display:'flex',
    alignSelf:'flex-end'
};*/

export class Author extends React.Component{
    render(){
        return (
            <div id='author'
                style={styles.Author}>
            <h3>- {this.props.author}</h3>
                </div>
        );
    }
};