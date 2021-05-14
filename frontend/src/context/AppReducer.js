// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(expense => expense._id !== action.payload)
      }
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [action.payload, ...state.expenses]
      }
    case 'GET_EXPENSES':
      return {
        ...state,
        loading: false,
        expenses: action.payload
      }
    case 'ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}