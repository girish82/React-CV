export const getEducation = () => {
    return {
        type : 'getEducation'
    }
}

export const addEducation = (payload) => {
    return {
        type : 'addEducation',
        payload : payload.payload
    }
}