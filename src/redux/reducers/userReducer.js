const userReducer = (state={}, action) => {
    
    switch(action.type){
        case 'getById':
                return action.payload
    default: return state; 
}}

export default userReducer;