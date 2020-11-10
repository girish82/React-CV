const initialState = {
    name : 'Girish',
    email : 'pgirish4u@gmail.com',
    phone : '31617317377'
}

const GeneralReducer = (state=initialState,action) => {
    // console.log(action.type)
    // console.log(action.payload)
    switch (action.type){
        case 'getGeneral' :
            return {
                ...state
            }
        case 'addGeneral' :
                console.log('add genral')
                return {
                    ...state,
                    name:action.payload.name,
                    email:action.payload.email,
                    phone:action.payload.phone
                }
        default : 
            return {
                ...state
            }
    } 
}

export default GeneralReducer;