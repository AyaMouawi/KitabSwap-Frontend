const userReducer = (state={}, action) => {
    
    switch(action.type){
        case 'getById':
                return action.payload;
        case 'getAddress':
                return action.payload;
        case 'getAllClients':
                return action.payload;
        case 'login':
                return action.payload;
        case 'register' : 
               return {
                ...state,
                registeredUser: action.payload.data
              };
        case 'deleteById':
                return state.filter((user)=>user.user_id!==action.payload);
        case 'updateAddress':
                return state.map((user)=>user.user_id===action.payload.Id?action.payload.user:user);
    default: return state; 
}}

export default userReducer;