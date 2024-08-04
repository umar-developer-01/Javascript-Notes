import React, { useState, useMemo, useCallback } from 'react';

// A child component that only re-renders when 'onAddItem' or 'filteredItems' change
// The ItemList component is wrapped with React.memo to prevent it from re-rendering unless its props (items or onAddItem) change.
// This ensures that ItemList only re-renders when it actually needs to, further optimizing performance.
const ItemList = React.memo(({ items, onAddItem }) => {
  console.log('ItemList re-rendered');
  
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={onAddItem}>Add Item</button>
    </div>
  );
});

const App = () => {
  const [items, setItems] = useState(['Apple', 'Banana', 'Cherry']);
  const [searchTerm, setSearchTerm] = useState('');
  const [newItem, setNewItem] = useState('');

  // Memoizing the filtered items list to avoid recalculating on every render
  // This avoids the expensive filtering process on every render when other state variables change.
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [items, searchTerm]);

  // Memoizing the callback function to avoid re-creating it on every render
  const handleAddItem = useCallback(() => {
    if (newItem) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  }, [items, newItem]);

  return (
    <div>
      <h1>useMemo and useCallback Example</h1>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search items..."
      />
      <input 
        type="text" 
        value={newItem} 
        onChange={(e) => setNewItem(e.target.value)} 
        placeholder="New item..."
      />
      <ItemList items={filteredItems} onAddItem={handleAddItem} />
    </div>
  );
};

export default App;