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
        case 'deleteById':
                return state.filter((user)=>user.user_id!==action.payload);
    default: return state; 
}}

export default userReducer;