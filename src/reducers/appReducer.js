import { LOAD_DATA } from "./../actions/types";

const initialState = {
  data: null
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_DATA: 
      return {
        ...state,
        data: action.payload,
      }
    default: 
      return state;
    }
}

export default reducer;