function Table({itemArray}) {
    return <table>
        <thead>
            <tr>
                <td>Item Number</td>
                <td>Item Name</td>
            </tr>
        </thead>
        <tbody>
            {itemArray.map(item => {
                return (
                    <tr>
                        <td>{item.index}</td>
                        <td>{item.name}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
}

export default Table;