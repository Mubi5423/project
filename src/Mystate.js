import React, { useState } from 'react';

export const Mystate = () => {
    const [num, setNum] = useState(0);

    const incNum = () => {
        setNum(num + 1);
    };

    const decNum = () => {
        if (num > 1) {
            setNum(num - 1);
        } else {
            setNum(0);
        }
    };

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={incNum}>Increase</button>
            <button onClick={decNum}>Decrease</button>
        </div>
    );
};
