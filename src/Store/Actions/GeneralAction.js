// import { bindActionCreators } from "redux"

export const getGeneral = () => {
    return {
        type : 'getGeneral'
    }
}

export const addGeneral = (payload) => {
    return {
        type : 'addGeneral',
        payload : payload.payload
    }
}