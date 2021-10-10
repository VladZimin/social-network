import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _rerenderEntireTree() {
        console.log('newRender')
    },

    _state: {
        profilePage: {
            postData: [
                {id: 1, message: 'Salam', likes: 21},
                {id: 2, message: 'Che tam?', likes: 51},
                {id: 3, message: 'Kak ty?!', likes: 28}
            ],
            newUpdatePostTextArea: ''
        },
        dialogsPage: {
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
            newUpdateDialogsTextArea: ''
        },
        sidebarDialogs: [
            {id: 1, name: 'Vlad'},
            {id: 2, name: 'Vanya'},
            {id: 3, name: 'Vitya'}
        ]
    },

    getState() {
        return this._state
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebarDialogs = sidebarReducer(this._state.sidebarDialogs, action)
        this._rerenderEntireTree()
    },

    subscriber(observer) {
        this._rerenderEntireTree = observer
    }
}



export default store