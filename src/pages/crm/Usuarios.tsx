import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { obtenerUsuarios } from "../../services/usuarios.service";
import RowTable from "../../components/crm/Usuarios/rowTable";
import type { InterfaceUsuario } from "./interfaces/Usuario.interface";


const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<InterfaceUsuario[]>([])


    useEffect(() => {
        obtenerUsuarios()
            .then(({ data }) => {
                console.log(data)
                setUsuarios(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


    return (
        <div>
            {/** HEADER */}
            <div className='flex justify-between  gap-4 items-center mb-10'>
                <div>
                    <h1 className="text-3xl sm:text-sm font-bold">Usuarios</h1>
                    <p>Gestiona usuarios y roles del sistema</p>
                </div>
                <button onClick={() => document.getElementById('crearUsuario')?.showModal()} className="btn p-6 w-50 text-[15px] hover:bg-[#131517]">
                    <FaUserPlus className="size-5 mr-3.5" />
                    Crear Usuario</button>

            </div>

            {/** FILTROS */}
            <div className="card  border-2 p-4 mb-4">
                <h1 className="card-title text-2xl mb-4">Filtros</h1>
                <div className="flex gap-4 items-center flex-wrap" >
                    <input className="input w-65 p-4" placeholder="Buscar por nombre" />
                    <select className="select w-65">
                        <option>Filtrar por rol</option>
                        <option>Cliente</option>
                        <option>Agente</option>
                        <option>Administrador</option>
                    </select>
                    <select className="select w-65">
                        <option>Estado</option>
                        <option>Todos</option>
                        <option>Activo</option>
                        <option>Desactivado</option>
                    </select>
                    <button className="cursor-pointer">
                        <IoReload className="size-6 hover:text-[#131517]" />
                    </button>
                </div>

            </div>
            {/** TABLA DE USUARIOS */}

            <div className="card border-2">
                <div className="overflow-x-auto max-h-80 overflow-y-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Nombre</th>
                                <th>Rol</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                usuarios.map((usuario, id) => (
                                    <RowTable key={id} {...usuario} />
                                ))
                            }
                        </tbody>
                        {/* foot */}
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Nombre</th>
                                <th>Rol</th>
                                <th>Acciones</th>
                                <th></th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <dialog id="crearUsuario" className="modal p-4">
                <div className="modal-box h-[70%] w-full max-w-xl">
                    <form method="dialog" className="mb-4">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 mb-5">✕</button>
                    </form>
                    <form>
                        <h1 className="text-2xl mb-2">Crear Usuario Nuevo</h1>
                        <legend className="text-xs text-gray-300 mb-4">Complete la información para crear un nuevo usuario en el sistema</legend>
                        <div className="flex flex-wrap md:flex-row gap-4 mb-5">
                            <div className="flex-1 min-w-[200px]">
                                <legend className="fieldset">Nombre completo</legend>
                                <input className="input w-full" placeholder="Nombre de usuario" />
                            </div>
                            <div className="flex-1 min-w-[200px]">
                                <legend className="fieldset">Correo electrónico</legend>
                                <input className="input w-full" placeholder="Correo electrónico" />
                            </div>
                            <div className="flex-1 min-w-[200px]">
                                <legend className="fieldset">Rol</legend>
                                <select className="select w-full">
                                    <option>Cliente</option>
                                    <option>Agente</option>
                                    <option>Administrador</option>
                                </select>
                            </div>
                             <div className="flex-1 min-w-[200px]">
                                <legend className="fieldset">Estado</legend>
                                <select className="select w-full">
                                    <option>Activo</option>
                                    <option>Inactivo</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-center top-5">
                            <button type="submit" className="btn btn-square w-full">Crear Usuario</button>
                        </div>
                    </form>
                </div>
            </dialog>



        </div>
    )
}

export default Usuarios
