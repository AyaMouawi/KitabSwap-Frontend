const saleBookReducer = (state=[], action) => {
    
    switch(action.type){

        case 'getAllSaleBooks':
            return action.payload; 
        case 'getSaleBookById':
            return action.payload;
        case 'getLatestSaleBooks':
            return action.payload;
        case 'addBook':
            return [...state, action.payload];
        case 'deleteById':
            return state.filter((saleBook)=>saleBook.saleBook_id!==action.payload);
        case 'updateSaleBook':
            return state.map((book)=>book.book_id===action.payload.Id?action.payload.book:book);
        default: return state; 
}}

export default saleBookReducer;