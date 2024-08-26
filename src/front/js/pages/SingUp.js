import React, { useState } from "react";
import axios from "axios";

export const SignUp = () => {
    const [signupData, setSignUpData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setSignUpData({
            ...signupData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(
                process.env.BACKEND_URL + "/api/registro", 
                signupData, // Enviar los datos en el cuerpo de la solicitud
                {
                    headers: { "Content-Type": "application/json" }, // Establecer el tipo de contenido
                }
            );
            console.log("Respuesta del servidor:", response);
            console.log("Usuario registrado:", response.data);
        } catch (error) {
            console.log("Ha habido un error: " + error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    value={signupData.email}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="password">Contraseña:</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={signupData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
};