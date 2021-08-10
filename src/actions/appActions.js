import { LOAD_DATA } from "./types";
import axios from "axios";
import { DateTime } from "luxon";

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


export const numberWithSpaces = (input) => {
  return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}


export const timeSinceResponse = (value) => {
  console.log('INPUT', value);
  const now = DateTime.local();
  console.log('NOW IS', now);
  const past = DateTime.fromISO(value);
  console.log('PASRT', past);
  console.log('CHECCKING TIME', past.toRelative(now));
}