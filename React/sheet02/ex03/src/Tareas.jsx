import React, {useState} from "react";

function Tareas()
{
    const [tarea, setTarea] = useState('');
    const [tareas, setTareas] = useState([]);

    const agregar = () => {
        if (tarea.trim() != '')
        {
            setTareas([...tareas, tarea])
            setTarea('');
        }
    };

    const eliminar = (index) => {
        const nuevaLista = tareas.filter((_, i) => i != index);
        setTareas(nuevaLista);
    };

    return (
        <div>
            <h2>Lista de tareas:</h2>
            <input 
                type="text"
                value={tarea}
                onChange={(e) => setTarea(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button onClick={agregar}>Añadir</button>
            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>
                        {tarea}
                        <button onClick={() => eliminar(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tareas;