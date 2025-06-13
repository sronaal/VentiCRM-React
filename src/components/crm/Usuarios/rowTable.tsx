import type { InterfaceUsuario } from "../../../pages/crm/interfaces/Usuario.interface";


const RowTable = ({email,name,role,estado} : InterfaceUsuario) => {
    console.log(estado)
    return (
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default RowTable;
