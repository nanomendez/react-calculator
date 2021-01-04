import React, { useState } from 'react'
import words from 'lodash.words'
import Functions from './components/Functions/Functions'
import MathOperations from './components/MathOperations/MathOperations'
import Numbers from './components/Numbers/Numbers'
import Result from './components/Result/Result'
import './App.css'

const App = () => {

    const [stack, setStack] = useState("");

    const items = words(stack, /[^-^+^*^/]+/g);

    const value = items.length > 0 ? items[items.length - 1] : "0";

    const onClickNumber = number => setStack(`${stack}${number}`);

    const onClickOperation = operation => setStack(`${stack}${operation}`);

    const onClickEqual = () => setStack(eval(stack).toString());

    const onClickClear = () => setStack("");

    const onClickDelete = () => {
        const newStack = stack.length > 0 ? stack.substring(0, stack.length - 1) : "";
        setStack(newStack);
    }

    return (
        <main className='react-calculator'>
            <Result value={value} />
            <Numbers onClickNumber={onClickNumber} />
            <Functions onClickClear={onClickClear} onClickDelete={onClickDelete} />
            <MathOperations onClickOperation={onClickOperation} onClickEqual={onClickEqual} />
        </main>
    )
}

export default App;