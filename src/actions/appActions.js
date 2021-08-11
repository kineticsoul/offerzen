import { DO_SEARCH, LOAD_DATA, SHOW_ARCHIVED, UPDATE_ARCHIVED } from "./types";
import axios from "axios";
import { DateTime } from "luxon";

// Load the JSON with all the data
export const loadData = () => async dispatch => {
  try {    
    axios.get('interviewRequests.json').then(
     response => {
       dispatch({
        type: LOAD_DATA,
        payload: response.data
      })
     });
  } catch (error) {
    console.log('Something went wrong...');
  }
}

//Hide or show archived responses
export const showArchived = (value) => async dispatch => {
  dispatch({
      type: SHOW_ARCHIVED,
      payload: value
    })
}

//Archive or unarchive the resposes
export const toggleItemArchive = (key) => async dispatch => {
  dispatch({
      type: UPDATE_ARCHIVED,
      payload: key
    })
}

//Search by candidate
export const doSearch = (searchTerm) => async dispatch => {
  dispatch({
      type: DO_SEARCH,
      payload: searchTerm
    })
}

// Format salaries to have spaces per R1000
export const numberWithSpaces = (input) => {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Format date to show time since last response
export const timeSinceResponse = (value) => {
  const now = DateTime.now();
  const past = DateTime.fromSQL(value);
  return past.toRelative(now);
}