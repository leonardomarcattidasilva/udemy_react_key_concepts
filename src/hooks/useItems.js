import { useState } from "react";
import concepts from "../data";

const useItems = () => {
   const [items, setItems] = useState(concepts)
   
   const removeItem = p => {
      const id = p.target.parentNode.id
      const filteredItems = items.filter(el => el.title != id)      
      setItems(filteredItems);
  }

   return {items, removeItem}
}

export default useItems