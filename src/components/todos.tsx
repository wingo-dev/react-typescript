import React from "react"
import Todo from "../modules/todo";
const Todos = () =>{
    const todos = [
        new Todo('Learn React'),
        new Todo('Type Script React'),
    ];
    console.log(todos);
    
    return(
    <ul>
        <li>React Leran</li>
        <li>Typescript Learn</li>
    </ul>
    );
}

export default Todos;