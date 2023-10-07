// this is actually react/redux

import React from 'react';

//Modify mutable function
export const removeItemAtIndex = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1, list.length)
    ];
};

//Modify impure function
export const generateUniqueId = (timestamp, random) => {
    return timestamp + random;
};

const App = () => {
    //Make your function calls here
    const result = removeItemAtIndex(['a', 'b', 'c', 'd'], 1);

    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    const uniqueId = generateUniqueId(timestamp, random);

    //Don't touch the content below this!
    return (
        <div>
            <h1>Remove Item at Index</h1>
            <p>Output: {result.join(', ')}</p>
            <h1>Unique ID:</h1>
            <p>Output: {uniqueId}</p>
        </div>
    );
};

export default App;