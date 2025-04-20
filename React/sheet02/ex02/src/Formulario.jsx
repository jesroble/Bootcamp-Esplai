import React, {useState} from "react";

function Formulario()
{
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasword] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setMensaje(`Datos enviados: Nombre: ${nombre} Email: ${email}`);
        setNombre('');
        setEmail('');
        setPasword('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input 
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPasword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>
            {mensaje && <p>{mensaje}</p>}
        </div>
    );
}

export default Formulario