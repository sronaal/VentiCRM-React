import type { AuthInterface } from "../components/auth/interfaces/AuthInterfaces";
import axios from "axios";
import { URLBACKEND } from "../lib/utils";


export const iniciarSesion = (credenciales : AuthInterface) => {

    console.log(credenciales)
    return axios.post(`${URLBACKEND}auth/login`, credenciales)
}

