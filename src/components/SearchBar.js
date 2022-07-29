function Searchbar({currentItem, setCurrentItem, itemArray, setArray}) {
    
    const searchInput = (e) => {
        setCurrentItem({
            name: e.target.value,
            index: currentItem.index,
        });
    }

    const addItem = (e) => {
        e.preventDefault();
        setArray([...itemArray, currentItem]);
        setCurrentItem({
            name: '',
            index: currentItem.index + 1,
        });
    }

    return(
        <div>
            <form onSubmit={addItem}>
                <label htmlFor="addItem">Item Name:</label>
                <input type="text" id="addItem" value={currentItem.name} onChange={searchInput}></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Searchbar;