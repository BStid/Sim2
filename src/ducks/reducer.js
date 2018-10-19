import axios from "axios";

//Actiontypes
const GET_LISTINGS = "GET_LISTINGS";
const UPDATE_INPUT = "UPDATE_INPUT";
const REMOVE_LISTING = "REMOVE_LISTING";
const CLEAR_INPUT = "CLEAR_INPUT";
const ADD_LISTING = "ADD_LISTING";

//InitialState
const initialState = {
  listings: [],
  input: "",
  propertyNameInput: "",
  addressInput: "",
  cityInput: "",
  stateInput: "",
  zipInput: "",
  isLoading: false
};

//Action Creators
export function getListings() {
  return {
    type: GET_LISTINGS,
    payload: axios.get("http://localhost:3010/api/listings")
  };
}

export function removeListing(id) {
  return {
    type: REMOVE_LISTING,
    payload: axios.delete("http://localhost:3010/api/delete/" + id)
  };
}
export function addListing(name, address, city, state, zipcode) {
  console.log("Adding to List...");
  return {
    type: ADD_LISTING,
    payload: axios.post(`http://localhost:3010/api/listings`, {
      name,
      address,
      city,
      state,
      zipcode
    })
  };
}
export const updateInput = input => {
  console.log(input.target.name);
  console.log(input.target.value);

  return {
    type: UPDATE_INPUT,
    payload: input
  };
};
export function clearInput() {
  return {
    type: CLEAR_INPUT,
    payload: ""
  };
}

//Reducer
export default function reducer(state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case `${GET_LISTINGS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_LISTINGS}_FULFILLED`:
      console.log(action.payload.data);
      return {
        ...state,
        isLoading: false,
        listings: action.payload.data
      };
    case `${GET_LISTINGS}_REJECTED`:
      return {
        ...state,
        isLoading: false
      };
    case REMOVE_LISTING:
      return {
        ...state,
        listings: action.payload.data
      };
    case UPDATE_INPUT:
      console.log(action.payload.target.name, action.payload.target.value);
      return {
        ...state,
        [action.payload.target.name]: action.payload.target.value
      };
    case CLEAR_INPUT:
      return {
        ...state,
        propertyNameInput: action.payload,
        addressInput: action.payload,
        cityInput: action.payload,
        stateInput: action.payload,
        number: action.payload,
        zipInput: action.payload
      };
    case ADD_LISTING:
      return {
        ...state,
        listings: action.payload.data
      };
    default:
      return state;
  }
}
