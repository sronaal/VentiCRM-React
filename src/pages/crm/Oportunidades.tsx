import CardOportunidades from "../../components/crm/Oportunidades/CardOportunidades"

const oportunidades = {
  nuevo: [
    {
      id: 1,
      titulo: "Software ERP",
      cliente: "TechCorp SA",
      contacto: "María González",
      monto: 45000,
      fechaEstimada: "2024-04-15",
      probabilidad: 25,
    },
    {
      id: 2,
      titulo: "Consultoría Digital",
      cliente: "StartupXYZ",
      contacto: "Luis Fernández",
      monto: 12000,
      fechaEstimada: "2024-03-30",
      probabilidad: 30,
    },
  ],
  proceso: [
    {
      id: 3,
      titulo: "Desarrollo Web",
      cliente: "InnovateLab",
      contacto: "Carlos Rodríguez",
      monto: 28000,
      fechaEstimada: "2024-04-20",
      probabilidad: 65,
    },
    {
      id: 4,
      titulo: "Sistema CRM",
      cliente: "Digital Solutions",
      contacto: "Ana Martín",
      monto: 35000,
      fechaEstimada: "2024-05-10",
      probabilidad: 70,
    },
  ],
  ganado: [
    {
      id: 5,
      titulo: "App Mobile",
      cliente: "TechCorp SA",
      contacto: "María González",
      monto: 22000,
      fechaEstimada: "2024-03-15",
      probabilidad: 100,
    },
  ],
  perdido: [
    {
      id: 6,
      titulo: "E-commerce",
      cliente: "RetailCorp",
      contacto: "Pedro Sánchez",
      monto: 18000,
      fechaEstimada: "2024-02-28",
      probabilidad: 0,
    },
  ],
}

const columnas = [
  { id: "nuevo", titulo: "Nuevo", color: "bg-blue-500", items: oportunidades.nuevo },
  { id: "proceso", titulo: "En Proceso", color: "bg-yellow-500", items: oportunidades.proceso },
  { id: "ganado", titulo: "Ganado", color: "bg-green-500", items: oportunidades.ganado },
  { id: "perdido", titulo: "Perdido", color: "bg-red-500", items: oportunidades.perdido },
]

const Oportunidades = () => {



  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold">Oportunidades</h1>
          <p className="text-sm">Gestiona tu pipeline de ventas</p>
        </div>
        <div>
          <button className="btn p-6 w-50 text-[15px] hover:bg-base-100">Nueva Oportunidad</button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4 mb-6">
        {
          columnas.map(columna => (
            <div className="card border p-3 h-35" key={columna.id}>
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="text-sm font-medium">{columna.titulo}</div>
                <div className={`w-3 h-3 rounded-full ${columna.color}`} />
              </div>
              <div className="card-body">
                <div className="text-2xl font-bold">{columna.items.length}</div>
                <p className="text-xs text-muted-foreground">
                  ${columna.items.reduce((sum, item) => sum + item.monto, 0).toLocaleString()} total
                </p>
              </div>
            </div>
          ))
        }
      </div>

        <div className="grid gap-4 md:grid-cols-4">
          {columnas.map((columna) => (
            <div key={columna.id} className="space-y-4">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${columna.color}`} />
                <h3 className="font-semibold">{columna.titulo}</h3>
                <span className="badge ml-auto">
                  {columna.items.length}
                </span>
              </div>
              <div className="space-y-3">
                {columna.items.map((oportunidad) => (
                  <CardOportunidades key={oportunidad.id} oportunidad={oportunidad} />
                ))}
                {columna.items.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground text-sm">No hay oportunidades</div>
                )}
              </div>
            </div>
          ))}
        </div>


    </div>
  )
}

export default Oportunidades