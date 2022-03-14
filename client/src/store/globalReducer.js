
const defaultState = {
    lineClass: 'short',
    background: 'black',
    twoColoredHoodie: true
}

export const globalReducer = (state = defaultState, action)=>{
    switch (action.type){

        case "CHANGE_LINE":
            return {...state, lineClass: action.payload}

        case "CHANGE_BACKGROUND":
            return {...state, background: action.payload}
        case "SET_TWOCOLORED":
            return {...state, twoColoredHoodie: action.payload}
        default:
        return state
    }}