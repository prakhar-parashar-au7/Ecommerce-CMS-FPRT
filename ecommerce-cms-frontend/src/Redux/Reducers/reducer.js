const initialState = {}


const allReducer = (state = initialState, action) => {
    switch(action.type) {
        case("STORE_EVERYTHING"):
        console.log("reducer")
        const everything = action.payload

        return {...everything}
    

    default :
    return state
    }
}

export default allReducer