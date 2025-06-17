import { useForm } from "react-hook-form"
import type { z } from "zod"
import { schemaCrearUsuario } from '../../../lib/zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { crearUsuario } from "../../../services/usuarios.service"
import { ToastContainer, toast } from 'react-toastify';

const ModalProduct = () => {


  const { register, handleSubmit, formState: { errors },reset } = useForm<z.infer<typeof schemaCrearUsuario>>({
    resolver: zodResolver(schemaCrearUsuario),
    defaultValues: {
      email: '',
      name: '',
      confirmPassword: '',
      password: '',
      rol: '',
      estado: ''
    }
  })

  const onCrearUsuario = (usuario: z.infer<typeof schemaCrearUsuario>) => {
    crearUsuario(usuario)
      .then(({ data }) => {
        toast.success('Usuario creado')
        reset()
        setTimeout(() => {
           window.location.reload()
        }, 5000)
        
      }).catch((error) => {
        console.log(error)
      })
  }
  
  return (
    <dialog id="crearUsuario" className="modal p-4">
      <div className="modal-box h-auto w-full max-w-xl">
        <form method="dialog" className="mb-4">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mb-5">✕</button>
        </form>
        <form onSubmit={handleSubmit(onCrearUsuario)}>
          
          {errors.estado && <p className="text-red-500 text-xs">{errors.estado.message}</p>}
          <h1 className="text-2xl mb-2">Crear Usuario Nuevo</h1>
          <legend className="text-xs text-gray-300 mb-4">Complete la información para crear un nuevo usuario en el sistema</legend>
          <div className="flex flex-wrap md:flex-row gap-4 mb-5">
            <div className="flex-1 min-w-[200px]">
              <legend className="fieldset">Nombre completo</legend>
              <input type="text" {...register('name')} className="input w-full" placeholder="Nombre de usuario" />
            </div>
            <div className="flex-1 min-w-[200px]">
              <legend className="fieldset">Correo electrónico</legend>
              <input 
              autoComplete="email"
              type="email" 
              {...register('email')} 
              className="input w-full" placeholder="Correo electrónico" />
            </div>
            <div className="flex-1 min-w-[200px]">
              <legend className="fieldset">Rol</legend>
              <select {...register('rol')} className="select w-full">
                <option value="">Seleccione un rol</option>
                <option value="Cliente">Cliente</option>
                <option value="Agente">Agente</option>
                <option value="Administrador">Administrador</option>
              </select>
            </div>
            <div className="flex-1 min-w-[200px]">
              <legend className="fieldset">Estado</legend>
              <select {...register('estado')} className="select w-full">
                <option value="">Seleccione un estado</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>

            <div className="flex-1 min-w-[200px]">
              <legend className="fieldset">Contraseña</legend>
              <input 
              autoComplete="new-password"
              type="password" 
              {...register('password')} 
              className="input w-full" placeholder="Contraseña" />
            </div>
            <div className="flex-1 min-w-[200px]">
              <legend className="fieldset">Confirmar Contraseña</legend>
              <input 
              autoComplete="new-password"
              type="password" 
              {...register('confirmPassword')} 
              className="input w-full" placeholder="Confirmar contraseña" />
            </div>

          </div>
          <div className="flex justify-center top-5">
            <button type="submit" className="btn btn-square w-full">Crear Usuario</button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </dialog>

  )
}

export default ModalProduct
