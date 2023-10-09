// this is actually react/redux

import React from "react";

type ListItem = string;

export const removeItemAtIndex = (
    list: ListItem[],
    index: number
): ListItem[] => {
    return [...list.slice(0, index), ...list.slice(index + 1, list.length)];
};

export const generateUniqueId = (timestamp: number, random: number): string => {
    return timestamp + String(random);
};

const App: React.FC = () => {
    const result: ListItem[] = removeItemAtIndex(["a", "b", "c", "d"], 1);

    const timestamp: number = Date.now();
    const random: number = Math.floor(Math.random() * 1000);
    const uniqueId: string = generateUniqueId(timestamp, random);

    return (
        <div>
            <h1>Remove Item at Index</h1>
            <p>Output: {result.join(", ")}</p>
            <h1>Unique ID:</h1>
            <p>Output: {uniqueId}</p>
        </div>
    );
};

export default App;

//ngl i just wanted a green square with this one
