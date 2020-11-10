const initialState = {
    school : 'GEC',
    degree : 'Computer Science',
    from : '2000-11-20',
    to : '2004-06-15'
    
}

const EducationReducer = (state=initialState,action) => {
    switch (action.type){
        case 'getEducation' :
            return {
                ...state
            }
        case 'addEducation' :
                return {
                    ...state,
                    school:action.payload.school,
                    degree:action.payload.degree,
                    from:action.payload.from,
                    to:action.payload.to
                }
        default : 
            return {
                ...state
            }
    } 
}

export default EducationReducer;