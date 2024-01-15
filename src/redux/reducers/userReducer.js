const userReducer = (state={}, action) => {
    
    switch(action.type){
        case 'getById':
                return action.payload
        case 'getAllClients':
                return action.payload
        case 'login':
                return action.payload;
        case 'register' : 
               console.log('idk', action.payload)
               return {
                ...state,
                registeredUser: action.payload.data, 
              };
    default: return state; 
}}

export default userReducer;