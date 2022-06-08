
import React from 'react'
// import Slider from 'rc-slider';
import { Container, Table } from 'react-bootstrap'
import 'rc-slider/assets/index.css';
import TooltipSlider from './TooltipSlider.tsx';
import { useState, useEffect } from 'react';

const ResultTable = (props) => {

    const [startYear, setStartYear] = useState(1925);
    const [endYear, setEndYear] = useState(2021);

    const returns = props.returns
    let returnsWCumulative = []

    const wrapperStyle = { width: 400, margin: 50 };

    // returns.reduce((previousValue, currentValue, i) => {
    //     if (previousValue !== undefined){
    //         console.log(previousValue, currentValue, i)

    //     }
    // } )

    useEffect(() => {
        return () => {
            console.log("loaded")
            calculateCumulative()
        };
    }, []);

    const changeStartYear = () => {
        const newStartYear = document.getElementsByClassName('rc-slider-handle rc-slider-handle-1')[0].attributes[5].value
        setStartYear(newStartYear - 1)
        const newEndYear = document.getElementsByClassName('rc-slider-handle rc-slider-handle-2')[0].attributes[5].value
        setEndYear(newEndYear)
        // console.log(newStartYear, newEndYear)
        // calculateCumulative()
    }

    const calculateCumulative = () => {
        returns.map(data => {
            console.log(data.totalReturn)
            data.prevReturn = 0
            returnsWCumulative.push(data.totalReturn)
        })
        // console.log(returnsWCumulative.splice(1))
        const previReturn = returnsWCumulative.splice(1)
        console.log(previReturn)
        console.log(returns)
        returns.map((v, i) => {
            v.prevReturn = previReturn[i]

        })
        // console.log(returnsWCumulative.splice(1))

        // let newArr = prevReturn.map((v, i) => ({ prevReturn: prevReturn})) 
        // let newnew = returns.map((v, i) => {
        //     ({...v, prevReturn: returnsWCumulative})
        // })
            
        // console.log(newnew)
        // return returnsWCumulative

        // let returnData = Array.from(document.getElementsByClassName('totalReturn')) 
        // returnData.map(data => {
        //     {...data,}
        // })
        // for ( let i = startYear; i < endYear; i++){
        //     let startReturn = parseFloat(returnData)
        //     console.log(returnData)
        //     const endReturn = parseFloat(document.getElementsByClassName('totalReturn')[i + 1].innerText)
        //     let cumulativeCol = document.getElementById('cumulative').value
        //     const cumulative = (((endReturn / startReturn) - 1)*100).toFixed(2)
        //     cumulativeCol = cumulative
        //     console.log(startReturn, endReturn, cumulative, cumulativeCol)
        //     console.log(endYear, startYear, i)
        //     setCumulative(cumulative)
        // }
    }


    const yearsToReturn = 
        returnsWCumulative.map((data, i) => {
        if(startYear < data.year && endYear > data.year){
            return (
                <tr key={data.year}>
                    <th>{data.year}</th>
                    <th className='totalReturn'>{data.totalReturn}</th>
                    {/* <th>{data.cumulative}</th> */}
                    <th></th>
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