import React from 'react';

type CarInfo = {
    company: string,
    model: string
}
type CarsComponentType = {
    carsInfo: Array<CarInfo>
}


const Cars: React.FC<CarsComponentType> = (props) => {
    return (
        <table>
            <tr>
                <th>Company</th>
                <th>Model</th>
            </tr>

            {props.carsInfo.map(
                (carsInfoObject, index) => {
                    return <tr>
                        <td>{carsInfoObject.company}</td>
                        <td>{carsInfoObject.model}</td>
                    </tr>
                }
            )}


        </table>
    );
};

export default Cars;