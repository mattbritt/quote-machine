/*******************************
 * QuoteBoxContainer is the overarching component that contains 
 *      logic to get quotes and update everything
 * 
 *******************************/


import React from 'react';
import $ from 'jquery';
import { QuoteBox } from '../components/QuoteBox';

import styles from '../helpers/styles';

// possible colors:
let colors = ['#982deb', '#77625c', '#b2b1cf', '#c200fb', '#ec0868', '#fc2f00', '#ec7d10', '#ffbc0a'];

// style for 'by mbritt' h5 at bottom
let h5Styles = {
    color:'#ffffff',
    marginTop:5
}

export class QuoteBoxContainer extends React.Component {

// randomColor returns a random color from colors array
    randomColor(){
        return colors[Math.floor(Math.random() * colors.length)];
    }

// getNewQuote gets a new quote and color and puts it into state
//              which causes update
    getNewQuote(){
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
        .done(function(response){
          
            this.setState( 
                {quote: response.quoteText,
                author: response.quoteAuthor,
                color: this.randomColor()});
                // fadein effect
                document.getElementById("QuoteBoxContainer").style.transition = "all 2s";


        }.bind(this))
        .fail(function(){
            console.log("getJSON error");        })

    }

// opens a new tab for tweeting the quote
    handleTweet(){

        let url = this.state.quote + ' - ' + this.state.author;
        url += '&hashtags=freeCodeCamp';
        //url = url.replace(' ', '%20');
         url = 'https://twitter.com/intent/tweet?text=' + url;
    
        url = encodeURI(url);

        var win = window.open(url, '_blank');
        if (win) {
            //Browser has allowed it to be opened
          
            win.focus();
        } else {
            //Browser has blocked it
            alert('Please allow popups for this website in order to Tweet quotes');
        }
    }


handleTumblr(){
    
    /*let url = 
    "https://www.tumblr.com/widgets/share/tool?posttype=quote&amp;tags=quotes,freecodecamp&amp;caption=";

    url += encodeURI(this.state.author);
    url += ";content=";
    url += encodeURI(this.state.quote);
*/

    let url = 'https://www.tumblr.com/widgets/share/tool?canonicalurl=www.tumblr.com&posttype=quote&content=';
    url += encodeURI(this.state.quote);
    url += '&caption=';
    url += encodeURI(this.state.author);
    
    var win = window.open(url, '_blank');
    if (win) {
        //Browser has allowed it to be opened
      
        win.focus();
    } else {
        //Browser has blocked it
        alert('Please allow popups for this website in order post quotes to Tumblr');
    }    

}




// constructor to setup this bindings and state
    constructor(props){
        super(props);
        
        this.setState = this.setState.bind(this);
        this.getNewQuote = this.getNewQuote.bind(this);
        this.handleTweet = this.handleTweet.bind(this);
        this.handleTumblr = this.handleTumblr.bind(this);

        this.state = {
            color: this.randomColor(),
            quote: "I wish I'd done this 10 years ago",
            author: 'Sturgill Simpson'
        }
       
    }
    
// getNewQuote for 1st run
    componentWillMount(){
        this.getNewQuote();
    }

// render a full page div (for background color),
//        a QuoteBox and and h5 underneath for my name
    render(){
   
        return (
            <div id='QuoteBoxContainer' style={{...styles.QuoteBoxContainer,
            ...{background:this.state.color}}}>
        <QuoteBox 
            color={this.state.color} 
            quote={this.state.quote} 
            author={this.state.author}
            getNewQuote={this.getNewQuote}
            handleTweet={this.handleTweet}
            handleTumblr={this.handleTumblr}/>
        <h5 style={h5Styles}>by mbritt</h5>
        </div>
        );
    }
};
