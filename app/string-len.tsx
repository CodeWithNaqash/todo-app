import React from 'react'
import { useState } from 'react'

const Stringlen = () => {

    const [val, setValue] = useState('input 1')
    const [val2, setValue2] = useState('input 2')

    const onChangeHandler = (e: any) => {
        console.log("e1: ", e.target.value);
        setValue(e.target.value)

    };
    const onChangeHandler2 = (e: any) => {
        console.log("e2: ", e.target.value);
        setValue2(e.target.value)

    };

    return (
        <>
            <input type={'text'} onChange={onChangeHandler} value={val}></input>
            <br />
            <input type={'text'} onChange={onChangeHandler2} value={val2}></input>
            <br />
            length of String 1 : {val.length}
            <br />
            length of String 2 : {val2.length}
        </>
    )

}



export default Stringlen