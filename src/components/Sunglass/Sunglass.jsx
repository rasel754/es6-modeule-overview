// rse
import React from 'react';
import './Sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply, divideFirstNumberByTheSecondNumber as divide } from '../../Utilits/Calculate';

const Sunglass = () => {
    const first =90;
    const second = 180;
    const sum =add(first, second);
    const multiplier =multiply(first,second);
    const divider =divide(first,second);
    return (
        <div>
            
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;