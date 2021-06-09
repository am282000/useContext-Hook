// By useContext Hook

import React,{useContext} from 'react'
// import CompC from './CompC'
import {FirstName,LastName} from './App'

const CompB = () => {
    const fname = useContext(FirstName);
    const lname = useContext(LastName)
    return (
        <h1>
            Hi Everyone, This is {fname} {lname}
        </h1>
    )
}

export default CompB;
