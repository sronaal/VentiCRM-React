import {  useState } from "react";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from 'react-toastify';
import { FaRegUser } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";

import { schemaLoginForm } from '../../lib/zod'
import { iniciarSesion } from "../../services/auth.service";

const LoginForm = () => {

    const { register, handleSubmit } = useForm<z.infer<typeof schemaLoginForm>>({
        resolver: zodResolver(schemaLoginForm),
        defaultValues: {
            email: '',
            password: ''
        }
    })


    const onSubmit = (credenciales: z.infer<typeof schemaLoginForm>) => {
        iniciarSesion(credenciales)
            .then(({ data, status }) => {
                console.log(data, status)
            })
            .catch((error) => {
                if (error.code === 'ERR_NETWORK') {
                    toast.error('Servidor no disponible')
                    setTimeout(() => {
                        window.location.reload()
                    },6000)
                }
                if (error.response.status == 401) {
                    toast.error('Correo y/o contraseña invalidos')
                    setTimeout(() => {
                        window.location.reload()
                    },6000)
                }


            })

    }

    return (
        <div>
            <div className='flex flex-col p-5 card bg-base-200 h-auto w-90 '>
                <ToastContainer/>
                <h1 className='text-xl card-title mx-auto  uppercase mb-8'>Iniciar Sesión</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <legend className="text-sm not-visited:fieldset mb-2">Correo electronico</legend>
                    <label className="input validator mb-4">
                        <FaRegUser />
                        <input
                            {...register('email')}
                            type="email"
                            required
                            placeholder="joe@domain.com"
                        />
                    </label>
                    <legend className="text-sm fieldset mb-2">Contraseña</legend>
                    <label className="input validator mb-6">
                        <FaKey />
                        <input
                            {...register('password')}
                            type="password"
                            required
                            placeholder="********"
                        />
                    </label>

                    <button type="submit" className="text-gray-700 text-2xl btn btn-xs bg-[#FFD6A7] w-full p-6">Iniciar Sesión</button>

                </form>
            </div>
        </div>
    )
}

export default LoginForm