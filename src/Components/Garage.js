import React from 'react';
import Car from './Car';

function Garage(props) {
    return ( 
        <>
            <ul>
                {props.cars.map((car) => (
                    <li>
                    <Car model={car.model} provider={car.provider} color={car.color}></Car>
                    </li>
                ))}
            </ul>
        </>
     );
}

export default Garage;