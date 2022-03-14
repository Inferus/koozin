

const defaultState = {
    selectedItem: 0
}

export const swiperReducer = (state = defaultState, action)=>{
    switch (action.type){
        case "SET_ITEM":
            return {...state, selectedItem: action.payload}
        
        default:
        return state
    }}