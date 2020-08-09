export default (state, action) => {
  switch (action.type) {
    case "Sign_In":
      return {
        ...state,
        signedIn: true,
      };
    case "Sign_Out":
      return {
        ...state,
        signedIn: false,
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};
