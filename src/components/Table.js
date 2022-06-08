
import React from 'react'
// import Slider from 'rc-slider';
import { Container, Table } from 'react-bootstrap'
import 'rc-slider/assets/index.css';
import TooltipSlider from './TooltipSlider.tsx';
import { useState } from 'react';

const ResultTable = (props) => {

    const [startYear, setStartYear] = useState(1925);
    const [endYear, setEndYear] = useState(2022);
    const returns = props.returns
    const wrapperStyle = { width: 400, margin: 50 };
    let returnsWCumulative = []

    returns.map(v => {
        if (startYear < v.year && endYear > v.year)
        // v.cumulative = (((1 + v.totalReturn) ** (1/(endYear - startYear)) - 1)*100).toFixed(2) + '%'
        returnsWCumulative.push(v)
    })

    const changeStartYear = () => {
        const newStartYear = document.getElementsByClassName('rc-slider-handle rc-slider-handle-1')[0].attributes[5].value
        setStartYear(newStartYear - 1)
        const newEndYear = document.getElementsByClassName('rc-slider-handle rc-slider-handle-2')[0].attributes[5].value
        setEndYear(newEndYear)
        console.log(newStartYear, newEndYear)
        calculateCumulative()
    }

    const calculateCumulative = () => {
        // console.log(returns)
        // returnsWCumulative[0]
        let startingYear = returnsWCumulative[returnsWCumulative.length - 1]
        startingYear.cumulative = 0
        console.log(startYear, parseInt(endYear), returnsWCumulative, startingYear)
        let newArr = returnsWCumulative.slice(1)
        console.log(newArr)
        // newArr.map(v => {
        //     console.log(startingYear)
        //     v.cumulative = startingYear
            // v.cumulative = (((1 + v.totalReturn) ** (1/(parseInt(endYear) - startingYear.year)) - 1)*100).toFixed(2) + '%'
        //     returnsWCumulative.push(v)
        // })
        // console.log(returnsWCumulative[returnsWCumulative.length - 1])
    }


    const yearsToReturn = 
        returnsWCumulative.map(data => {
        if(startYear < data.year && endYear > data.year){
            return (
                <tr key={data.year}>
                    <th>{data.year}</th>
                    <th className='totalReturn'>{data.totalReturn}</th>
                    <th className='cumulative'>{data.cumulative}</th>
                </tr>
            )
        }
    }).reverse()

    return (
        <Container style={wrapperStyle}>
                <TooltipSlider
                    range
                    min={1926}
                    max={2021}
                    defaultValue={[1926, 2021]} 
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
                    </tbody>
                </Table>
            </Container>
    )
}

export default ResultTable;