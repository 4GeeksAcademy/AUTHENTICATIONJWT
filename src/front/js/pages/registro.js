
import axios from "axios";
import React, { useState } from "react";

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
            const response = await axios.post(process.env.BACKEND_URL + "/registro", signupData, {
                headers: { "Content-Type": "application/json" }
            });
            console.log("Respuesta del servidor:", response); // Verifica la respuesta del servidor
            console.log("Usuario registrado:", response.data);
        } catch (error) {
            console.error("Ha habido un error:", error);
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
