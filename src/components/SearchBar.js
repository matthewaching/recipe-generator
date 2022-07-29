function Searchbar({currentItem, setCurrentItem, itemArray, setArray}) {
    
    const searchInput = (e) => {
        setCurrentItem({
            name: e.target.value,
            index: currentItem.index,
        });
        console.log(currentItem.index);
    }

    const addItem = (e) => {
        e.preventDefault();
        setArray([...itemArray, currentItem]);
    }

    return(
        <div className="searchbar">
            <form onSubmit={addItem}>
                <label htmlFor="addItem">Item Name:</label>
                <input type="text" id="addItem" value={currentItem.name} onChange={searchInput}></input>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Searchbar;