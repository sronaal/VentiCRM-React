import { FaRegBuilding } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";



const CardOportunidades = ({ oportunidad }: { oportunidad: any }) => {
    return (
        <div className="card border mb-3 cursor-pointer hover:shadow-md transition-shadow">
            <div className="p-3">
                <div className="flex items-start justify-between">
                    <div className="text-sm font-medium">{oportunidad.titulo}</div>
                    <span  className="badge text-xs">
                        {oportunidad.probabilidad}%
                    </span>
                </div>
            </div>
            <div className="card-body pt-0">
                <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                        <FaRegBuilding className="mr-2 h-3 w-3" />
                        {oportunidad.cliente}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <FaRegUser className="mr-2 h-3 w-3" />
                        {oportunidad.contacto}
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm font-medium">
                            <FaDollarSign className="mr-1 h-3 w-3" />${oportunidad.monto.toLocaleString()}
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                            <FaRegCalendar className="mr-1 h-3 w-3" />
                            {oportunidad.fechaEstimada}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardOportunidades
