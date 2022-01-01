import React from 'react'

function ListRendering() {

    let emplist=[
        {
            name: "Ganesh",
            salary:"45000",
            mail:"xyz@gmail.com"
        },

        {
            name: "Ganesh",
            salary:"80000",
            mail:"xyb@gmail.com"
        },

        {
            name: "Ganesh",
            salary:"90000",
            mail:"sai@yahoo.com"
        }
    ]
    return (
        <div>
            <h1>
                List Rendering
            </h1>
            {/* {
                emplist.map(element =>
                    <h1> {element} </h1>
                )
            } */}

            {
                emplist.map(
                    element =>
                    <>
                    <p>{element.name}</p> 
                    <p>{element.salary}</p>
                    <p>{element.mail}</p>
                    </>
                )
            }
            
        </div>
    )
}

export default ListRendering
