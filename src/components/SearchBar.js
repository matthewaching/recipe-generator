function Searchbar(props) {
    return(
        <div>
            <label for="addItem">Item Name:</label>
            <input type="text" id="addItem"></input>
            <button type="submit">Add</button>
        </div>
    )
}

export default Searchbar;