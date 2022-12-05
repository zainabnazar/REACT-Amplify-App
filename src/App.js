import logo from './logo.svg';
import './App.css';
import { Amplify, Auth } from 'aws-amplify'
import React, { useEffect, useState } from 'react';
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';

//const myAPI = "https://0tipw7uf5j.execute-api.eu-west-2.amazonaws.com/dev";

Amplify.configure(awsconfig);
Auth.configure(awsconfig);
const App = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function getItem(event) {
    let itemId = event.input;
    fetch(`https://0tipw7uf5j.execute-api.eu-west-2.amazonaws.com/dev/items/${itemId}`)
      .then(response => {
        response.json().then((data) => {
          let newItems = [...items]
          newItems.push(data)
          setItems(newItems);
        });
      })
      .catch(error => {
        console.log("Error:", error);
      })
  }

  return (
    <div className="App">
      <AmplifySignOut />
      <h1>React App Using Amplify</h1>
      <div>
        <input placeholder="Enter Item" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </div>
      <button onClick={() => getItem({ input })}>Get Item from backend</button>
      <h2 style={{ visibility: items.length > 0 ? 'visible' : 'hidden' }}>Response</h2>
      {
        items.map((thisItem, index) => {
          return (
            <div key={thisItem.itemId}>
              <span><b>ItemId:</b> {thisItem.itemId} - <b>ItemName</b>: {thisItem.item}</span>
            </div>)
        })
      }


    </div >
  )

}
export default withAuthenticator(App);