import {React} from "react";

const Form = ({setTodo, len}) => {
    var itemtoAdd = ""
    const handleOnChange = (event)=>{
        event.preventDefault() 
        itemtoAdd = event.target.firstChild.value
        if(itemtoAdd !== ""){
            setTodo(state => [...state, {id:len,todo:itemtoAdd}])
        }
        event.target.firstChild.value = ""
    }
    return(
        <div className="Form_container">
            <form onSubmit={handleOnChange}>
                <input type="text" placeholder="Write a plan"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form