const orderReducer = (state=[], action) => {
    
    switch(action.type){

        case 'getAllOrders':
            return action.payload; 
        default: return state; 
}}

export default orderReducer;