import React from "react";
import Card from "./Card.jsx";
import contacts from "../contacts.js";

function App() {
  return (
    <div>
      <h1 className="headding">My Contacts</h1>
      <Card name={contacts[0].name} imgUrl={contacts[0].imgUrl} phone={contacts[0].phone} email={contacts[0].email}/>
      <Card name={contacts[1].name} imgUrl={contacts[1].imgUrl} phone={contacts[1].phone} email={contacts[1].email}/>
      <Card name={contacts[2].name} imgUrl={contacts[2].imgUrl} phone={contacts[2].phone} email={contacts[2].email}/>
    </div>
  );
}

export default App;
