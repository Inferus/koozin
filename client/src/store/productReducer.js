


const defaultState = {
    baseColor: 'black',
    hoodType: 'split',
    type: null
}

export const productReducer = (state = defaultState, action)=>{
    switch (action.type){
        case "SET_BASECOLOR":
            return {...state, baseColor: action.payload}
        case "SET_HOOD":
            return {...state, hoodType: action.payload}
            case "SET_TYPE":
            return {...state, type: action.payload}
        default:
        return state
    }}