import axios from "axios";
import { URLBACKEND } from "../lib/utils";


export const obtenerUsuarios = () => {

    return axios.get(`${URLBACKEND}user`,)
}