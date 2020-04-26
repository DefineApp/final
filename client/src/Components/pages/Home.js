import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import Header from "../../Components/contacts/Header";
import ContactFilter from "../../Components/contacts/ContactFilter";

const Home = () => {
  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>
      <div>
        <Header />
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
