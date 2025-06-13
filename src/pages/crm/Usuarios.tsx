import { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { obtenerUsuarios } from "../../services/usuarios.service";
import RowTable from "../../components/crm/Usuarios/rowTable";
import type { InterfaceUsuario } from "./interfaces/Usuario.interface";
import ModalProduct from "../../components/crm/Usuarios/ModalCrearUsuario";


const Usuarios = () => {

    const [usuarios, setUsuarios] = useState<InterfaceUsuario[]>([]);
    const [inputSearch, setInputSearch] = useState('');
    const [selectRol, setSelectRol] = useState('');
    const [selectEstado, setSelectEstado] = useState('');

    useEffect(() => {
        obtenerUsuarios()
            .then(({ data }) => {
                setUsuarios(data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    const resultFilter = usuarios
        .filter((usuario) =>
            usuario.name.toLocaleUpperCase().includes(inputSearch.toLocaleUpperCase().trim()) ||
            usuario.email.toLocaleUpperCase().includes(inputSearch.toLocaleUpperCase().trim())
        )
        .filter((usuario) =>
            selectRol === '' ? true : usuario.role.toLocaleUpperCase() === selectRol.toLocaleUpperCase()
        )
        .filter((usuario) => {
            if (selectEstado === '' || selectEstado === 'Todos') return true;
            return usuario.estado?.toLocaleUpperCase() === selectEstado.toLocaleUpperCase();
        });

    const handleResetFilters = () => {
        setInputSearch('');
        setSelectRol('');
        setSelectEstado('');
    };

    return (
        <div>
            {/* HEADER */}
            <div className='flex justify-between gap-4 items-center mb-10'>
                <div>
                    <h1 className="text-3xl sm:text-sm font-bold">Usuarios</h1>
                    <p>Gestiona usuarios y roles del sistema</p>
                </div>
                <button
                    onClick={() => document.getElementById('crearUsuario')?.showModal()}
                    className="btn p-6 w-50 text-[15px] hover:bg-[#131517]">
                    <FaUserPlus className="size-5 mr-3.5" />
                    Crear Usuario
                </button>
            </div>

            {/* FILTROS */}
            <div className="card border-2 p-4 mb-4">
                <h1 className="card-title text-2xl mb-4">Filtros</h1>
                <div className="flex gap-4 items-center flex-wrap">
                    <input
                        value={inputSearch}
                        onChange={(e) => setInputSearch(e.target.value)}
                        className="input w-65 p-4"
                        placeholder="Buscar por nombre o correo"
                    />

                    <select value={selectRol} onChange={(e) => setSelectRol(e.target.value)} className="select w-65">
                        <option value="">Filtrar por rol</option>
                        <option value="Cliente">Cliente</option>
                        <option value="Agente">Agente</option>
                        <option value="Administrador">Administrador</option>
                    </select>

                    <select value={selectEstado} onChange={(e) => setSelectEstado(e.target.value)} className="select w-65">
                        <option value="">Estado</option>
                        <option value="Todos">Todos</option>
                        <option value="Activo">Activo</option>
                        <option value="Desactivado">Desactivado</option>
                    </select>

                    <button className="cursor-pointer" onClick={handleResetFilters}>
                        <IoReload className="size-6 hover:text-[#131517]" />
                    </button>
                </div>
            </div>

            {/* TABLA DE USUARIOS */}
            <div className="card border-2">
                <div className="overflow-x-auto max-h-80 overflow-y-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Nombre</th>
                                <th>Rol</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                resultFilter.map((usuario, id) => (
                                    <RowTable key={id} {...usuario} />
                                ))
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>Nombre</th>
                                <th>Rol</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <ModalProduct />
        </div>
    );
};

export default Usuarios;
