'use client'

import { useState } from 'react';

const Parent = () => {
    const [money, setMoney] = useState<number>(0);

    const incrementMoney = () => setMoney(money + 1000);
    const decrementMoney = () => setMoney(money - 500);

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Parent Component</h1>
            <p className="mb-4">Current Money: {money}</p>
            <div className="flex space-x-4">
                <Child1 incrementMoney={incrementMoney} />
                <Child2 decrementMoney={decrementMoney} />
            </div>
        </div>
    );
};

const Child1 = ({ incrementMoney }: { incrementMoney: () => void }) => (
    <button
        onClick={incrementMoney}
        className="px-4 py-2 bg-blue-500 text-white rounded"
    >
        Increment by 1000
    </button>
);

const Child2 = ({ decrementMoney }: { decrementMoney: () => void }) => (
    <button
        onClick={decrementMoney}
        className="px-4 py-2 bg-red-500 text-white rounded"
    >
        Decrement by 500
    </button>
);

export default Parent;
