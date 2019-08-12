import * as actionTypes from '../actions/actionTypes.js'

const initialState = {
    messages : [
        {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
            address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
            lat: "-37.3159",
            lng: "81.1496"
            }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
            }
            }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_CHAT:
            console.log(action.messages)
            return {
                ...state,
                messages: state.messages.concat(action.messages)
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