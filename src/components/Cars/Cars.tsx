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
            <thead>
            <tr>
                <th>Id</th>
                <th>Company</th>
                <th>Model</th>
            </tr>
            </thead>
            <tbody>

            {props.carsInfo.map(
                (carsInfoObject, index) => {
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{carsInfoObject.company}</td>
                        <td>{carsInfoObject.model}</td>
                    </tr>
                }
            )}
            </tbody>

        </table>
    );
};

export default Cars;