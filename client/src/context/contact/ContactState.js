import React, { useReducer } from "react";
import uuid from "uuid/v4";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CHALLENGE,
  DELETE_CHALLENGE,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CHALLENGE,
  FILTER_CHALLENGE,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Saving Electricity",
        type: "Energy",
        points: "10 Points",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 2,
        name: "Saving Gas",
        type: "Energy",
        points: "10 Points",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 3,
        name: "Plant a tree",
        type: "Nature",
        points: "10 Points",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        id: 4,
        name: "Boycott Plastic",
        points: "10 Points",
        type: "Waste Reduction",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Challenge
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CHALLENGE, payload: contact });
  };

  // Delete Challenge

  const deleteContact = (id) => {
    dispatch({ type: DELETE_CHALLENGE, payload: id });
  };
  // Set Current Challenge
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Challenge
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Challenge
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CHALLENGE, payload: contact });
  };
  // Filter Challenge

  const filterContacts = (text) => {
    dispatch({ type: FILTER_CHALLENGE, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
