import type { InterfaceUsuario } from "../../../pages/crm/interfaces/Usuario.interface";


const RowTable = ({email,name,role} : InterfaceUsuario) => {
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
        
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default RowTable;
