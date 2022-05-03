import React,{useState} from "react"
const Calculator=()=>{

    const [input,setInput]=useState('')

    const display=(value)=>{
        setInput(input+value)
    }

    const calculate=()=>{
       let answer= eval(input)
       setInput(answer)
    }
    const clear=()=>{
        setInput('')
    }
    return (
        <>
        <h1>Cacluclator</h1>
        <div className="header">
            <input type='text' value={input}></input>
            <input type='button' value='Clear' onClick={clear}></input>
            <table>
                <tr>
                    <td><button onClick={()=>{display("1")}}>1</button></td>
                    <td><button onClick={()=>{display("2")}}>2</button></td>
                    <td><button onClick={()=>{display("3")}}>3</button></td>
                    <td><button onClick={()=>{display("/")}}>/</button></td>
                   
                </tr>
                <tr>
                    <td><button onClick={()=>{display("4")}}>4</button></td>
                    <td><button onClick={()=>{display("5")}}>5</button></td>
                    <td><button onClick={()=>{display("6")}}>6</button></td>
                    <td><button onClick={ ()=>{display("*")}}>*</button></td>                   
                </tr>
                <tr>
                    <td><button onClick={()=>{display("7")}}>7</button></td>
                    <td><button onClick={()=>{display("8")}}>8</button></td>
                    <td><button onClick={()=>{display("9")}}>9</button></td>
                    <td><button onClick={()=>{display("+")}}>+</button></td>
                   
                </tr>
                <tr>
                    <td><button onClick={()=>{display("0")}}>0</button></td>
                    <td><button onClick={()=>{display('.')}}> .</button></td>
                    <td><button onClick={()=>{calculate()}}>=</button></td>
                    <td><button onClick={()=>{display("-")}}>-</button></td>
                   
                </tr>
            </table>
        </div>
        </>
    )
}

export default Calculator