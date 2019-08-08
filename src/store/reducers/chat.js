import * as actionTypes from '../actions/actionTypes.js'

const initialState = {
    messages : {
        messages: [
        {
        user: {
        name: "Bender",
        username: "bender",
        id: 1
        },
        receiver_id: 2,
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
        user: {
        name: "Pickle Rick",
        username: "pickle_rick",
        id: 2
        },
        receiver_id: 1,
        message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
        user: {
        name: "Bender",
        username: "bender",
        id: 1
        },
        receiver_id: 2,
        message: "Consectetur adipiscing elit."
        },
        {
        user: {
        name: "Bender",
        username: "bender",
        id: 1
        },
        receiver_id: 2,
        message: "Incididunt ut labore et dolore magna."
        },
        {
        user: {
        name: "Pickle Rick",
        username: "pickle_rick",
        id: 2
        },
        receiver_id: 1,
        message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
        user: {
        name: "Pickle Rick",
        username: "pickle_rick",
        id: 2
        },
        receiver_id: 1,
        message: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        ]
        }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CHAT:
            console.log(action.messages)
            return {
                ...state,
                messages: {
                    ...state.messages,
                    messages: state.messages.messages.concat(action.messages)
                }
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