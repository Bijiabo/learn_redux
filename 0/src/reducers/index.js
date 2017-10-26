import { combineReducers } from 'redux'

const user = (state = {}, action) => {
    // if (!state) {state={}}
    state = {}
    switch (action.type) {
        case 'change_name':
            state.name = action.data.name
            console.log(`[reducer change_name]: ${JSON.stringify(state)}`)
            return state
        case 'change_password':
            return state
        default:
            return state
    }
}

const app = combineReducers({
    user,
})

export default app
