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
        name: "A Cleaner Earth",
        type: "Pollution",
        points: "25 Points",
        description:
          "Submit a time-lapse video of you going around your neighbourhood and picking up 50 pieces of trash and throwing them in the garbage, where they belong! Make sure to take proper measures with trash on the ground: use latex gloves and make sure to thoroughly wash your hands after you're done! ",
      },
      {
        id: 2,
        name: "Boycott Plastic",
        type: "Reduce Waste",
        points: "10 Points",
        description:
          "Shop with reusable bags! Take a picture of yourself shopping with reusable bags at the store! Make sure that your photo contains your username, so we'll know it's you!",
      },
      {
        id: 3,
        name: "Earth Day",
        type: "Nature",
        points: "20 Points",
        description:
          "Enjoy the outdoors! Earth Day is about celebrating our planet, and you can show your appreciation for her by sending us a photo of you enjoying the outside, whether that would be reading a book outside or having a picnic! In the end, judges will rank these submissions that will help determine the final rankings, so make them creative!",
      },
      {
        id: 4,
        name: "Reducing Pollution",
        points: "20 Points",
        type: "Pollution",
        description:
          "Food in the grocery stores travels an average of 1,500 miles to get to you. Instead, shopping at local farmer's market supports local businesses and is much better for the environment. For this task, you'll need to take pictures of yourself shopping at the local farmer's market! ",
      },

      {
        id: 5,
        name: "Boycott Plastic",
        points: "10",
        type: "Pollution",
        description:
          "It takes over 1.5 million barrels of oil to manufacture the amount of plastic water bottles we use up each year. It's a well-known fact that plastic bottles aren't great for the environment. We'd like you to take a picture of you drinking from your reusable water bottle, and a little description/background of how you met your reusable water bottle and how it has served you thus far.",
      },

      {
        id: 6,
        name: "Reduce, Reuse and Recycle!",
        points: "20 Points",
        type: "Reuse",
        description:
          "Manufacturing clothes creates a lot of waste help reduce the waste created by not shopping at a mall, thrift! For this task, take a picture of yourself picking out clothes at the thrift store and then at home wearing the item!",
      },

      {
        id: 7,
        name: "Reduce, Reuse and Recycle!",
        points: "15 Points",
        type: "Reduce",
        description:
          "Fast fashion means a lot of the items in our closets aren’t worn often and when the trend for them disappears, they end up in the dumpster. Go through your closet and donate these clothes! Take a picture of your closet before and after as well as your donation pile and the place where you decide to donate them to complete this task!",
      },

      {
        id: 8,
        name: "Reduce",
        points: "20 Points",
        type: "Reduce",
        description:
          "A lot of clutter is generated in our homes overtime by replacing things we have and never getting rid of it. Host a garage sale with your family and donate whatever doesn’t sell! Send us a picture before your garage sale starts and the results of it and then you donating whatever is left over (if there is anything left!).",
      },

      {
        id: 9,
        name: "Boycott Plastic!",
        points: "20 Points",
        type: "Pollution",
        description:
          "Researchers estimate since the 1950s 8.3 billion tons of plastic has been generated around the world and only 9 per cent of those plastics have been recycled. We are currently on track for an additional 12 billion tonnes of plastic to be lost to disposal by 2050. For this challenge, pack a lunch in reusable boxes for 3 days! They don’t have to be 3 days in a row, any 3 days for the period of this challenge are fine. Send us a picture of you making the food and taking it with you as well as you eating it and bringing the boxes back home!",
      },

      {
        id: 10,
        name: "Green House Gases",
        points: "20 Points",
        type: "Emissions",
        description:
          "Veganism is good for the planet. That’s because cattle grazing generates massive amounts of methane and carbon dioxide, both of which are potent greenhouse gases that contribute to climate change. Go vegan for 2 days in a row! Send us a picture of all your meals for these two days!",
      },

      {
        id: 11,
        name: "Reduce, Reuse, Recycle",
        points: "20 Points",
        type: "Reuse",
        description:
          "From kitchen scraps that can be used to make stocks to items that can be recycled, our trash should be less full the more aware we get. Channel your inner grandmother and see how many times things can be reused or repurposed rather than simply thrown away. Be creative! Our judges will select the most creative entry! Send us a picture of what you come up with!",
      },

      {
        id: 12,
        name: "Reducing Pollution",
        points: "15 Points",
        type: "Emissions",
        description:
          "Bring back the clothesline! Using a clothesline to dry your clothes whenever possible is a great way to reduce carbon emissions! Send us a picture of you hang drying your laundry at least 3 times for the duration of this challenge!",
      },

      {
        id: 13,
        name: "Green House Gases",
        points: "20 Points",
        type: "Emissions",
        description:
          "Reduce air pollution! Cars emit carbon dioxide as part of their emissions... so cars are a part of the global warming problem. How much CO2 do cars emit? Burning one gallon of gas creates 20 pounds of carbon dioxide, and the average car emits about six tons of carbon dioxide every year. Carpool or use public transport to get to work or school for 4 days. Send us a picture of you on your commute!",
      },

      {
        id: 14,
        name: "Earth Day",
        points: "20 Points",
        type: "Nature",
        description:
          "Fill your yard with native plants! This will cut down significantly on watering requirements and, in the process, provide much needed food and shelter to local wildlife. Plant 2 native to your area plants. Send us a picture of you planting and which plant you chose!",
      },

      {
        id: 15,
        name: "Reduce, Reuse, Recycle",
        points: "10 Points",
        type: "Reduce",
        description:
          "Sign up for a compost bin! On your city website, search for composting and they should send you a bin free of charge. Compost for a week and send us pictures of you doing so!",
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
