const bannerReducer = (state=[], action) => {
    
    switch(action.type){

        case 'getAll':
            return action.payload; 
        case 'getHighlighted':
                return action.payload; 
        default: return state; 
}}

export default bannerReducer;