export const ToDo=(items)=>{
    return(
        {
            type:'TO_DO'
            payload:items
        }
    )
}

export const DeleteData=()=>{

    return(
        {
            type:'DELETE_DATA'
        }
    )
}