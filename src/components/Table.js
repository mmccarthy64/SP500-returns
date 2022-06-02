import React from 'react'

const Table = (props) => {
    const returns = props.returns

    return (
        <div className='table'>
            <table>
            <thead>
            <tr>
                <th>Year</th>
                <th>Total Return</th>
                <th>Cumulative Returns</th>
            </tr>
            </thead>
            <tbody>
                {returns.map((data) => (
                    <tr>
                        <td>{data.year}</td>
                        <td>{data.totalReturn}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    )
}

export default Table;