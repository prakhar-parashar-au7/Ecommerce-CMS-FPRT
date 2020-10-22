import axios from 'axios'

export const getEverythingAction = () => {
    return async (dispatch) => {
        const {data} = await axios({
            method : "get",
            url : "/getEverything"
        })
        console.log(data)
        return dispatch(storeEverythingInRedux(data))
    }
}

export const storeEverythingInRedux = (data) => {
    console.log(data)
    return {
        type : "STORE_EVERYTHING",
        payload : data
    }
}