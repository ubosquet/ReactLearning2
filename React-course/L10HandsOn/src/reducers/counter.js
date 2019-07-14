const initialState = {
  count: 0,
  numberInputted : 0,
  buttonclicked : 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        buttonclicked : state.buttonclicked + 1
      

      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        buttonclicked : state.buttonclicked + 1
      };
    case 'CHANGE':
      return{
        ...state,
        numberInputted: action.number,
       
      };

      case 'INPUT_NUMBER':
        return {
          ...state,
          count: parseInt(state.numberInputted),
          numberInputted: null,
          buttonclicked : (state.buttonclicked = 0)
        };

    case 'RESET':
      return {
        ...state,
        count: (state.count = 0)
      };
    default:
      return state;
  }
}

export default counterReducer;