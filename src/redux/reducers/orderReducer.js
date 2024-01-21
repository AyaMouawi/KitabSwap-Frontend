const orderReducer = (state = [], action) => {
    switch (action.type) {
      case 'getAllOrders':
        return action.payload;
      case 'placeOrder':
        return [...state, action.payload];
      case 'getById':
        return action.payload;
      case 'deleteById':
        return state.filter((order) => order.orderId !== action.payload);
      case 'editById':
        return state.map((order) =>
          order.orderId === action.payload
            ? { ...order, status: 'delivered' }
            : order
        );
      default:
        return state;
    }
  };
  
  export default orderReducer;