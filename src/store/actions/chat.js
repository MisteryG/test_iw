import * as actionTypes from './actionTypes.js'
import axios from 'axios'

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
    return (dispatch) => {
        return axios.get ('https://huc2m17au1.execute-api.us-west-2.amazonaws.com/production/messages')
            .then (response => {
                console.log(response.data);
                dispatch(initChat(response.data))
            })
            .catch (error => {
                console.log(error)
                dispatch(errorChat())
            })
    }
}

