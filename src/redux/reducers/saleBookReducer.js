const saleBookReducer = (state=[], action) => {
    
    switch(action.type){

        case 'getAllSaleBooks':
            return action.payload; 
        case 'getSaleBookById':
            return action.payload;
        case 'getLatestSaleBooks':
            return action.payload;
        default: return state; 
}}

export default saleBookReducer;