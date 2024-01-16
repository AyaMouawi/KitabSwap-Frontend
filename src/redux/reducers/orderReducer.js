const orderReducer = (state=[], action) => {
    
    switch(action.type){

        case 'getAllOrders':
            return action.payload; 
            case 'placeOrder':
            return [...state, action.payload];
        default: return state; 
}}

export default orderReducer;