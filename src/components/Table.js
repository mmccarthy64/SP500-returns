
import React from 'react'
// import Slider from 'rc-slider';
import { Container, Table } from 'react-bootstrap'
import 'rc-slider/assets/index.css';
import TooltipSlider from './TooltipSlider.tsx';
import { useState } from 'react';


const ResultTable = (props) => {

    const [startYear, setStartYear] = useState(1925);
    const [endYear, setEndYear] = useState(2021);

    const returns = props.returns
    const wrapperStyle = { width: 400, margin: 50 };

    const changeStartYear = () => {
        const newStartYear = document.getElementsByClassName('rc-slider-handle rc-slider-handle-1')[0].attributes[5].value
        setStartYear(newStartYear)
        const newEndYear = document.getElementsByClassName('rc-slider-handle rc-slider-handle-2')[0].attributes[5].value
        setEndYear(newEndYear)
        console.log(newStartYear, newEndYear)
        // setStartYear(startYear + 1)
    }

    const mapReturns = (newStartYear, newEndYear) => {
        const dates = []
            // if (newStartYear > )
    }
        // console.log(returns)

    // const changeEndYear = () => {
    //     const endYear = document.getElementsByClassName('rc-slider-handle rc-slider-handle-2')[0].attributes[5].value
    //     console.log(endYear)
    // }

    const yearsToReturn = returns.map((data) => {
        if(startYear <= data.year && endYear >= data.year){
            console.log(data.year)
            return <tr>
                <th>{data.year}</th>
                <th>{data.totalReturn}</th>
            </tr>
        }
    }).reverse()
    return (
        <Container style={wrapperStyle}>
                <TooltipSlider
                    range
                    min={1925}
                    max={2021}
                    defaultValue={[1925, 2021]} 
                    returns={returns}
                    onChange={changeStartYear}
                     />
                <Table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Total Return</th>
                            <th>Cumulative Returns</th>
                        </tr>
                    </thead>
                    <tbody>
                        {yearsToReturn}
                        {/* {mapReturns} */}
                        {/* {returns.map((data) => (
                            <tr key={data.year}>
                                <td>{data.year}</td>
                                <td>{data.totalReturn}</td>
                            </tr>
                        )).reverse()} */}
                        {/* {console.log(returns)} */}
                    </tbody>
                </Table>
            </Container>
    )
}

export default ResultTable;