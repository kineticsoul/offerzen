import { DO_SEARCH, LOAD_DATA, SHOW_ARCHIVED, UPDATE_ARCHIVED } from "./../actions/types";

const initialState = {
  data: null,
  showArchived: false
};

const reducer = (state = initialState, action) => {
  switch(action.type) {

    // loading the initial data
    case LOAD_DATA: 
      return {
        ...state,
        data: action.payload,
      }

      // Enabling or disabling visibility or archived responses
    case SHOW_ARCHIVED: 
      return {
        ...state,
        showArchived: action.payload,
      }

      // performing a search by candidate name
    case DO_SEARCH:
      const newArray = [...state.data]; 
      const filteredData =  newArray.filter(item => item.candidate.toLowerCase().includes(action.payload));
      console.log('Filteed data', filteredData);
      
      return { 
      ...state, 
      data: filteredData
      }
    
      // Archiving or unarchiving the item 
    case UPDATE_ARCHIVED: {
        const newArray = [...state.data]; //making a new array
        newArray[action.payload].archived = !newArray[action.payload].archived//changing value in the new array
      
      return {
        ...state,
        data: newArray
      }
    }
    default: 
      return state;
    }
}

export default reducer;