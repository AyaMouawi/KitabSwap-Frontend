const tradeBookReducer = (state = [], action) => {
    console.log('Reducer Action Type:', action.type);
    switch (action.type) {
      case 'getAllTradeBooks':
        console.log('getAllTradeBooks Payload:', action.payload);
        return action.payload;
      case 'getByOwnerId':
        console.log('getByOwnerId Payload:', action.payload);
        return action.payload;
        case 'postTrade':
          return [...state, action.payload];
      default:
        console.log('Default State:', state);
        return state;
    }
  };
  
export default tradeBookReducer;