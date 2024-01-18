const tradeRequestReducer = (state=[], action) => {
    
    switch(action.type){
        case 'getByBookId':
            return action.payload;
        case 'accept':
            return action.payload;
        case 'decline':
            return action.payload;
        case 'requestTrade':
            return [...state, action.payload];
    default: return state; 
}}

export default tradeRequestReducer;