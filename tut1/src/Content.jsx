import React from "react";
import { useState } from "react";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "one half pound bag of cocoa almonds ",
    },
    {
      id: 2,
      checked: false,
      item: "item 2 ",
    },
    {
      id: 3,
      checked: false,
      item: "item 3",
    },
  ]);

  return (
    <main>
      <ul>
        
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input type="checkbox" name="" checked={item.checked}  />
            <label>{item.item}</label>
            <button>delete</button>
          </li>
        ))}
       
      </ul>
    </main>
  );
};

export default Content;
