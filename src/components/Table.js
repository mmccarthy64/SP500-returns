import React from 'react'

export default function Table(props) {
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
            {returns.map(data => {
                // console.log(year)
                <tr>
                    <td>{data.year}</td>
                    <td>{data.totalReturn}</td>
                </tr>
                // {console.log(data.totalReturn)}
            })}
        </tbody>
      </table>
    </div>
  )
}
