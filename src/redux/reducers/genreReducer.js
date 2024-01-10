const genreReducer = (state=[], action) => {
    
    switch(action.type){

        case 'getAllGenres':
            return action.payload; 
        default: return state; 
}}

export default genreReducer;