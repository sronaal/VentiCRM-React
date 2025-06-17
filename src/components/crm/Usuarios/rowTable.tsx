import type { InterfaceUsuario } from "../../../pages/crm/interfaces/Usuario.interface";

interface RowTableProps extends InterfaceUsuario {
  setUsuarioEditar: (usuario: InterfaceUsuario) => void;
}



const RowTable = ({ id, email, name, role, estado, setUsuarioEditar}: RowTableProps) => {
    return (
        <>
            <tr>
                <th>
                    <label>
                        <input type="checkbox" className="checkbox" />
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">

                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <p>{role}</p>
                </td>
                <td>
                    {
                        estado == 'Activo' ?
                            <p className="text-green-500">{estado}</p>
                            : <p className="text-gray-400">{estado}</p>

                    }
                </td>
                <th>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="cursor-pointer m-1">...</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li>
                                <a 
                                onClick={() => {
                                    setUsuarioEditar({ email, name, role, estado, id });

                                    document.getElementById('editarUsuario')?.showModal()}
                                    }>Editar</a>
                            </li>
                            <li>
                                <a 
                                onClick={() =>  document.getElementById('eliminarUsuario')?.showModal()}
                                >Eliminar</a>
                            </li>
                        </ul>
                    </div>
                </th>
            </tr>

            
        </>
    );
};

export default RowTable;
