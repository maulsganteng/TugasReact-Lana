import React from "react"

function Tugas7(props){
    return(
        <div className="boxframe">
        <h1>Muhammad Maulana Fikry</h1>
        <hr/>
        <li>nama: {props.name}</li>
        <li>kelas: {props.kelas}</li>
        <li>email: {props.email}</li>
        </div>
    );
}

export default Tugas7;