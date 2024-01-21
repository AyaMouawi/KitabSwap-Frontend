const bannerReducer = (state=[], action) => {
    
    switch(action.type){

        case 'getAll':
            return action.payload; 
        case 'UnHighlight':
            return action.payload;
        case 'Highlight':
            return action.payload;
        case 'getHighlighted':
            return action.payload; 
        case 'updateBanner':
            return state.map((banner)=>banner.banner_id===action.payload.Id?action.payload.banner:banner);
        default: return state; 
}}

export default bannerReducer;