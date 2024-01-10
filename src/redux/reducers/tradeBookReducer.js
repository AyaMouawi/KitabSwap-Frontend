const tradeBookReducer = (state=[], action) => {
    
    switch(action.type){
        case 'getAllTradeBooks':
            return action.payload; 
        case 'getByOwnerId' : 
            return action.payload
    default: return state; 
}}

export default tradeBookReducer;