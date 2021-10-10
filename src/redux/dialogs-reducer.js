const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_DIALOGS_TEXT = 'UPDATE-NEW-DIALOGS-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Vanya'},
        {id: 3, name: 'Vitya'},
        {id: 4, name: 'Igor'},
        {id: 5, name: 'Denis'}
    ],
    messagesData: [
        {id: 1, message: 'Salam'},
        {id: 2, message: 'Che tam'},
        {id: 3, message: 'Kak tam'},
        {id: 4, message: 'Gde tam'},
    ],
}

let dialogsReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, message: action.message}]
            }
        default:
            return state
    }
}

export const sendMessage = (message) => ({type: ADD_MESSAGE, message})

export default dialogsReducer