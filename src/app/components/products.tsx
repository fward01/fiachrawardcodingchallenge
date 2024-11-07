"use client";
import { useEffect, useState } from "react";

export default function Products() {
  

    interface Item {
      id: number;
      name: string;
  
  }
    const [data, setData] = useState<any>([]);
  
    useEffect(() => {
      fetch('products.json')
        .then(response => response.json())
        .then(json => setData(json));
    },[]);
  
    if (!data) {
      return <p>Loading...</p>;
    }
    const deleteLastitem = ()=>{const datacopy = [...data];
      datacopy.pop();
      setData(datacopy)};
    const addSpeghetti=() =>{console.log(data); 
      setData([...data,{id:"5", name: "Spaghetti"}]);};
    return (
    <div>
      <ul>
        {(data as Item[]).map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={addSpeghetti} value="Spaghetti">
         Add Spaghetti
      </button>
      <button onClick={deleteLastitem} value="NoSpaghetti">
        Delete last item 
      </button>
    <p></p>
    </div>      
    );
  }

