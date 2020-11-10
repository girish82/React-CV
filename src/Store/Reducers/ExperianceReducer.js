const initialState = {
    company : 'Al-Ahleia',
    position : 'IT Engineer',
    from : '2006-05-20',
    to : '2019-06-16',
    tasks : 'Lots of tasks'
}

const ExperianceReducer = (state=initialState,action) => {
    switch (action.type){
        case 'getExperiance' :
            return {
                ...state
            }
        case 'addExperiance' :
            return {
                ...state,
                company:action.payload.company,
                position:action.payload.position,
                from:action.payload.from,
                to:action.payload.to,
                tasks:action.payload.tasks
            }
        default : 
            return {
                ...state
            }
    } 
}

export default ExperianceReducer;