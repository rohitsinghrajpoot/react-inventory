import { useState } from "react";

export const Inventory = () => {
 const [inv, setInv] = useState({
    books: 10,
    notebooks: 13,
    pens: 40,
    total:63
  });
    // Create add and remove functions here that changes the
    // state.
    const add =(a,value) =>{
      if(a==="b"){setInv({...inv ,books:inv.books+value,total:inv.total+value})}
   else if(a==="c"){setInv({...inv ,notebooks:inv.notebooks+value,total:inv.total+value})}
   else{setInv({...inv ,pens:inv.pens+value,total:inv.total+value})}
    
    }
  if(inv.books<0||inv.notebooks<0||inv.pens<0){
    return <h4>not less than 0</h4>
  }
  
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "3px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        width: "400px",
      }}
    >
      <div className="items">
        <span>Books: </span>
        <button className="circlularButton" onClick={()=>{add("b",1)}}>+</button>
        <button className="circlularButton" onClick={()=>{add("b",-1)}}>-</button>
        <span>{inv.books}</span>
      </div>
      <div className="items">
        <span>Notebooks: </span>
        <button className="circlularButton" onClick={()=>{add('c',1)}}>+</button>
        <button className="circlularButton" onClick={()=>{add('c',-1)}}>-</button>
        <span>{inv.notebooks}</span>
      </div>
      <div className="items">
        <span>Pen: </span>
        <button className="circlularButton" onClick={()=>{add('l',1)}}>+</button>
        <button className="circlularButton" onClick={()=>{add('l',-1)}}>-</button>
        <span>{inv.pens}</span>
      </div>
      {/* <div className="items">
        <span>Ink Pens: </span>
        <button className="circlularButton">+</button>
        <button className="circlularButton">-</button>
        <span>{inv.inkpens}</span>
      </div> */}

            {}
      total: {inv.total}
    </div>
  );
};
