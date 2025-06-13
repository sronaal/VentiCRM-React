import axios from "axios";
import { URLBACKEND } from "../lib/utils";
;


export const obtenerUsuarios = () => {

    return axios.get(`${URLBACKEND}user`,)
}

export const crearUsuario = (usuario) => {
    console.log(usuario.name)
    const data = {
        name: usuario.name,
        email: usuario.email,
        password: usuario.password,
        estado: usuario.estado,
        rol: usuario.rol
    }
    return axios.post(`${URLBACKEND}user`, data)
}