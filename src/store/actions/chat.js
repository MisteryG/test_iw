import * as actionTypes from './actionTypes.js'
import axios from 'axios'

export const initChat = (messages) => {
    return {
        type:actionTypes.INIT_CHAT,
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
        messages
    }
}

export const setChat = () => {
    return (dispatch) => {
        axios.get ('https://jsonplaceholder.typicode.com/users')
            .then (response => {
                dispatch(initChat(response.data))
            })
            .catch (error => {
                dispatch(errorChat())
            })

        // var data = null;
        // var xhr = new XMLHttpRequest();
        // xhr.withCredentials = true;

        // xhr.addEventListener("readystatechange", function () {
        // if (this.readyState === 4) {
        //     console.log(this.responseText);
        // }
        // });

        // xhr.open("GET", "https://huc2m17au1.execute-api.us-west-2.amazonaws.com/production/messages");
        // xhr.setRequestHeader("User-Agent", "PostmanRuntime/7.15.2");
        // xhr.setRequestHeader("Accept", "*/*");
        // xhr.setRequestHeader("Cache-Control", "no-cache");
        // xhr.setRequestHeader("Postman-Token", "d4fb389f-8e49-4a7c-b977-fe03b5d43029,9d2cf5ba-0144-4449-aba9-c6f3cf1660d6");
        // xhr.setRequestHeader("Host", "huc2m17au1.execute-api.us-west-2.amazonaws.com");
        // xhr.setRequestHeader("Accept-Encoding", "gzip, deflate");
        // xhr.setRequestHeader("Connection", "keep-alive");
        // xhr.setRequestHeader("cache-control", "no-cache");
        // xhr.send(data);

    }
}

