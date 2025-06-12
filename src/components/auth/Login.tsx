import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { ToastContainer, toast } from 'react-toastify';
import { FaRegUser } from "react-icons/fa6";
import { FaKey } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

import { schemaLoginForm } from '../../lib/zod'
import { iniciarSesion } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

    const { register, handleSubmit, reset } = useForm<z.infer<typeof schemaLoginForm>>({
        resolver: zodResolver(schemaLoginForm),
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const navigate = useNavigate()

    const onSubmit = (credenciales: z.infer<typeof schemaLoginForm>) => {
        iniciarSesion(credenciales)
            .then(({ data }) => {
                localStorage.setItem('token', data.token)
                localStorage.setItem('user', JSON.stringify(data.user))
                navigate('/', { replace: true })

            })
            .catch((error) => {
                if (error.code === 'ERR_NETWORK') {
                    toast.error('Servidor no disponible')
                    reset()
                }
                if (error.response.status == 401) {
                    toast.error('Correo y/o contraseña invalidos')
                    reset()
                }


            })

    }

    return (
        <div>
            <div className='flex flex-col p-5 card bg-base-200 h-auto w-90 '>
                <ToastContainer />
                <h1 className='text-xl card-title mx-auto  uppercase mb-4'>Iniciar Sesión</h1>

                <button className="btn text-gray-700 bg-[#FFD6A7] mb-4">
                    <FcGoogle />
                    Iniciar Sesión con Google
                </button>
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