
import React from 'react'
// import Slider from 'rc-slider';
import { Row, Container, Table } from 'react-bootstrap'
import 'rc-slider/assets/index.css';
import TooltipSlider from './TooltipSlider.tsx';


const resultTable = (props) => {
    const returns = props.returns
    const wrapperStyle = { width: 400, margin: 50 };

    // const cumulativeReturns = () => {

    // }
    return (
        <Container style={wrapperStyle}>
            <Row>
                <TooltipSlider range min={1926}
                    max={2021}
                    defaultValue={[1926, 2021]} />
                <Table>
                    <thead>
                        <tr>
                            <th>Year</th>
                            <th>Total Return</th>
                            <th>Cumulative Returns</th>
                        </tr>
                    </thead>
                    <tbody>
                        {returns.map((data) => (
                            <tr key={data.year}>
                                <td>{data.year}</td>
                                <td>{data.totalReturn}</td>
                            </tr>
                        )).reverse()}
                    </tbody>
                </Table>
            </Row>
            </Container>
    )
}

export default resultTable;