import * as actionTypes from './actionTypes.js'
import axios from 'axios'

// const http = new XMLHttpRequest();
// const url='https://huc2m17au1.execute-api.us-west-2.amazonaws.com/production/messages'

export const initChat = (messages) => {
    return {
        type:actionTypes.INIT_CHAT,
        // messages:messages
        messages
    }
}

export const errorChat = () => {
    return {
        type:actionTypes.ERROR_CHAT
    }
}

export const addChat = (messages) => {
    return {
        type:actionTypes.ADD_CHAT,
        // messages:messages
        messages
    }
}

export const setChat = () => {
    var config = {
        headers: {
            'Access-Control-Allow-Origin':'*'
        }
    }
    return (dispatch) => {
        axios.get ('https://huc2m17au1.execute-api.us-west-2.amazonaws.com/production/messages',config)
        // axios.get ('https://huc2m17au1.execute-api.us-west-2.amazonaws.com/production/messages', { 'headers': { 'Access-Control-Allow-Origin': '*' }})
            .then (response => {
                console.log(response)
                console.log(response.data.results);
                console.log(response.status)
                dispatch(initChat(response.data))
            })
            .catch (error => {
                console.log(error)
                dispatch(errorChat())
            })

        // axios.jsonp('https://huc2m17au1.execute-api.us-west-2.amazonaws.com/production/messages')
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });


        // http.open('GET',url,true);
        // http.send();
        // http.onreadystatechange=()=>{
        //     if(this.readyState==4 && this.status==200){
        //         console.log(http.responseText)
        //     }
        // }

    }
}

