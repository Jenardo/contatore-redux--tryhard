const InitialState = { value: 0 };

// Creo il reducer

const counterReducer = (state = InitialState, action) => {
  switch (action.type) {
    case 'PLUS_ONE.SUCCESS': {
      console.log('PLUS ONE SUCCESS');
      console.log('STATE:: ', state);
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case 'MINUS_ONE.SUCCESS': {
      console.log('MINUS_ONE SUCCESS');
      return {
        ...state,
        value: state.value - 1,
      };
    }
    case 'changeValue.SUCCESS': {
      console.log('Change value success');
      return {
        ...state,
        value: Number(action.value),
      };
    }
    case 'MULTY_VAL.SUCCESS': {
      console.log('Multi Value Success');
      return {
        ...state,
        value: state.value * action.multy,
      };
    }
    default:
      return state;
  }
};

export default counterReducer;
