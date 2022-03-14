




  export const  changeLength= (length)=>{
        return {
            type: "CHANGE_LINE",
            payload: length
        }
    }

    export const setBaseColor=(color)=>{
        return {
            type: "SET_BASECOLOR",
            payload: color
        }
    }
    export const  setType=(type)=>{
        return {
            type: "SET_TYPE",
            payload: type
        }
    }
   export const setHood=(bool)=>{
        return {
            type: "SET_HOOD",
            payload: bool
        }
    }
    export const setBackground = (color)=>{
        return {
            type: "CHANGE_BACKGROUND",
            payload: color
        }
    }

    export const setTwoColored = (bool)=>{
        return {
            type: "SET_TWOCOLORED",
            payload: bool
        }
    }
