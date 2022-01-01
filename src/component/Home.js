import React from 'react'
import {BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import FormRendering from './FormRendering'
import Functional from './Functional'
import StatesinClassComponents from './StatesinClassComponents'
function Home() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Main />}></Route>
                <Route path="/login" element={<FormRendering />}></Route>
                <Route path="/digit" element={<StatesinClassComponents />}></Route>
                 <Route path="/union" element={<Functional />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Home
function Main(){

    return(
        <>
        <h1> Home Page</h1>
        <Link to="/login"><button>Login</button></Link>
        </>
    )
}
