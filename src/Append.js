import React, {useState} from "react";

const Append =() => {
    const [value, setvalue] = useState('');
    const [todo, setTodo] = useState([]);

    function handleAppend() {
        let update = [...todo];
        update.push(value);
        setTodo(update);
        setvalue('')
    }

    function handleUndo() {
        let update = [...todo];
        update.pop(value);
        setTodo(update);
        setvalue('')
    }
    return(
        <div>
           
           <input type="text" value={value}
           onChange={(e) => setvalue(e.target.value)}/>
           <button onClick={handleAppend}>Append</button>
           <button onClick={handleUndo}>Undo</button>

           <ul>
            {
                todo.map((item) => {
                    return(
                        <li>{item}</li>
                    )
                })
            }
           </ul>
        </div>
    )
}
export default Append;