import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import SearchBar from './components/SearchBar';
import Table from './components/Table';

function App() {
  const [currentItem, setCurrentItem] = useState({
      name: '',
      index: 0,
    },
  );

  const [itemArray, setArray] = useState([]);

  useEffect(() => {
    setCurrentItem({
      name: '',
      index: currentItem.index + 1,
    });
  }, [itemArray]);

  return (
    <div className="App">
      <SearchBar
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        itemArray={itemArray}
        setArray={setArray}
      />
      <Table
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
        itemArray={itemArray}
        setArray={setArray}
      />
    </div>
  );
}

export default App;
