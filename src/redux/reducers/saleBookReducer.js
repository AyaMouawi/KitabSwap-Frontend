const saleBookReducer = (state=[], action) => {
    
    switch(action.type){

        case 'getAllSaleBooks':
            return action.payload; 
            case 'getByGenreName':
            return action.payload.saleBooks.filter((saleBook)=>saleBook.genreName===action.payload.genreName);
            default: return state; 
}}

export default saleBookReducer;