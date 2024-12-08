import React from 'react';
import keyConceptsImage from './assets/images/key-concepts.png';
import Header from './components/Header';
import Concepts from './components/Concepts';
import useItems from './hooks/useItems';

const App = () => {
   const {items, removeItem} = useItems()
  return (
    <div>
      <Header src={keyConceptsImage}/>
      <Concepts id="concepts" onRemove={removeItem} items={items} />
    </div>
  );
}

export default App;
