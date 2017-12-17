/*******************************
 * styles is the main styles object for the page componentss
 * 
 *******************************/


let styles = {
    // smallButton is used on TweetButton and TumblrButton
    smallButton:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginRight:5,
       fontSize:20,
       height:50,
       width:50,
       borderRadius:5,
       color:'#ffffff',
       cursor: 'pointer'
    },
    // largeButton is used on NewQuoteButton
    largeButton:{
        alignSelf:'flex-end',
        justifySelf:'flex-end',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      
        marginLeft:'auto',
       fontSize:15,
       fontWeight:700,
       height:50,
       width:100,
       borderRadius:5,
       color:'#ffffff',
       cursor:'pointer'

    },

    // QuoteBox is used on QuoteBox
    QuoteBox:{
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf:'center',
        background: '#FFFFFF',
        maxWidth:500,
        borderRadius:5,
        padding:50


    },

    QuoteBoxContainer:{
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%'
    },

    Author:{
        display:'flex',
        alignSelf:'flex-end'
    },
    ButtonRow:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        marginTop:10
    }

}

module.exports = styles;