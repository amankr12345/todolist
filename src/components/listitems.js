import React from 'react'

const List = ({todoList,setTodo }) =>{
 

    const displayList = () => {
        return(
            <div>
                {
                    todoList.map(item => {
                        return(
                            <div className="task_item">
                                <li>{item.todo} 
                                   
                                </li>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return(
        <div className="list">
            <ul>
                {displayList()}
            </ul>
        </div>
    )
}

export default List