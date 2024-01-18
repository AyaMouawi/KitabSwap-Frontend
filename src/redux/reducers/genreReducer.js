const genreReducer = (state=[], action) => {
    
    switch(action.type){

        case 'getAllGenres':
            return action.payload; 
        case 'addGenre':
            return [...state, action.payload];
        case 'deleteById':
            return state.filter((genre)=>genre.genre_id!==action.payload);
        default: return state; 
        
}}

export default genreReducer;