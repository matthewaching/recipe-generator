function Table({itemArray}) {
    return <table>
        {itemArray.map(item => {
            return <tr><td>{item.name}</td></tr>
        })}
    </table>
}

export default Table;