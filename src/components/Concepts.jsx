import React from "react";
import Box from './Box';

const Concepts = ({id, onRemove, items}) => {
   console.log('concepts');
   
   return <ul id={id}>
      {
         items.map(el => <Box data={el} className="concept" key={el.title} id={el.title} onClick={onRemove}  />)
      }
   </ul>
}

export default Concepts;