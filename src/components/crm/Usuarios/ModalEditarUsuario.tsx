import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { schemaEditarUsuario } from "../../../lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { ToastContainer } from "react-toastify";
import type { InterfaceUsuario } from "../../../pages/crm/interfaces/Usuario.interface";
import { editarUsuario } from "../../../services/usuarios.service";

interface ModalEditarUsuarioProps {
  usuarioEditar: InterfaceUsuario | null;
}

const ModalEditarUsuario = ({ usuarioEditar }: ModalEditarUsuarioProps) => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm<z.infer<typeof schemaEditarUsuario>>({
    resolver: zodResolver(schemaEditarUsuario),
    defaultValues: {
      email: "",
      name: "",
      rol: "",
      estado: ""
    }
  });

  useEffect(() => {
    if (usuarioEditar) {
      reset({
        name: usuarioEditar.name,
        email: usuarioEditar.email,
        rol: usuarioEditar.role,
        estado: usuarioEditar.estado,
      });
    }
  }, [usuarioEditar, reset]);

  const onEditarUsuario = (usuario: z.infer<typeof schemaEditarUsuario>) => {
    editarUsuario(usuario, usuarioEditar?.id)
    .then((data) => {
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })
    
    
    reset();
    
  };

  return (
    <div>
      <dialog id="editarUsuario" className="modal p-4">
        <div className="modal-box h-auto w-full max-w-xl">
          <form method="dialog" className="mb-4">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mb-5">✕</button>
          </form>
          <form onSubmit={handleSubmit(onEditarUsuario)}>
            {errors.estado && <p className="text-red-500 text-xs">{errors.estado.message}</p>}
            <h1 className="text-2xl mb-2">Editar Usuario</h1>
            <legend className="text-xs text-gray-300 mb-4">Complete la información para editar el usuario</legend>
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
                  className="input w-full"
                  placeholder="Correo electrónico"
                />
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
            </div>
            <div className="flex justify-center top-5">
              <button type="submit" className="btn btn-square w-full">Editar Usuario</button>
            </div>
          </form>
        </div>
        <ToastContainer />
      </dialog>
    </div>
  );
};

export default ModalEditarUsuario;
