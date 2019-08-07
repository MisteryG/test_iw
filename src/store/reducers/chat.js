import * as actionTypes from '../actions/actionTypes.js'

const initialState = {
    messages : {
        messages: [
            {
                user: {
                    name: "Prueba",
                    username: "Prueba",
                    id: 1
                },
                receiver_id: 2,
                message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            }]
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CHAT:
            return {
                ...state.messages.push(action.messages)
            };
        case actionTypes.INIT_CHAT:
            return {
                ...state,
                messages:action.messages
            }
        case actionTypes.ERROR_CHAT:
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer;