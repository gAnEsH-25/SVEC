import React,{useState} from 'react'


function StatesinFunctionalComponents() {

    let [name,updateName]= useState("Ganesh")
    return (
        <div>
            <h1 onMouseOver={()=>{updateName("Ganesh K N")}}
                onMouseLeave={()=>{updateName("Dhoni")}}>
                {name}
            </h1>
        </div>
    )
}

export default StatesinFunctionalComponents
