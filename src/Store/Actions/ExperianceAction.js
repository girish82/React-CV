export const getExperiance = () => {
    return {
        type : 'getExperiance'
    }
}

export const addExperiance = (payload) => {
    return {
        type : 'addExperiance',
        payload : payload.payload
    }
}