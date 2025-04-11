import { useEffect, useState } from "react"

function AvionList({ onEdit }) {
  const [aviones, setAviones] = useState([])
  const [confirmDelete, setConfirmDelete] = useState(null)

  const fetchAviones = () => {
    /* getAviones().then((res) => setAviones(res.data)) */
  }

  useEffect(() => {
    fetchAviones()
  }, [])

  const handleDelete = (id) => {
    deleteAvion(id).then(() => {
      fetchAviones()
      setConfirmDelete(null)
    })
  }

  const getStatusClass = (estado) => {
    switch (estado) {
      case "Activo":
        return "status-active"
      case "Mantenimiento":
        return "status-maintenance"
      case "Inactivo":
        return "status-inactive"
      default:
        return ""
    }
  }

  return (
    <div className="list-wrapper">
      <div className="list-header">
        <h3>Flota de Aviones</h3>
        <span className="counter">{aviones.length} aviones</span>
      </div>

      {aviones.length === 0 ? (
        <div className="empty-state">
          <p>No hay aviones registrados</p>
        </div>
      ) : (
        <ul className="data-list">
          {aviones.map((avion) => (
            <li key={avion.id} className="list-item">
              <div className="item-content">
                <div className="item-main">
                  <h4>{avion.modelo}</h4>
                  <span className="item-subtitle">Matrícula: {avion.matricula}</span>
                </div>
                <div className="item-details">
                  <span className="detail-item">
                    <strong>Capacidad:</strong> {avion.capacidad} pax
                  </span>
                  <span className="detail-item">
                    <strong>Tipo:</strong> {avion.tipo}
                  </span>
                  <span className={`status-badge ${getStatusClass(avion.estado)}`}>{avion.estado}</span>
                </div>
              </div>
              <div className="item-actions">
                <button className="btn btn-icon" onClick={() => onEdit(avion)} title="Editar">
                  ✏️
                </button>
                <button className="btn btn-icon btn-danger" onClick={() => setConfirmDelete(avion.id)} title="Eliminar">
                  🗑️
                </button>
              </div>

              {confirmDelete === avion.id && (
                <div className="delete-confirm">
                  <div className="delete-confirm-content">
                    <span role="img" aria-label="Warning" className="delete-icon">
                      ⚠️
                    </span>
                    <p>¿Estás seguro de eliminar este avión?</p>
                    <div className="delete-actions">
                      <button className="btn btn-secondary" onClick={() => setConfirmDelete(null)}>
                        Cancelar
                      </button>
                      <button className="btn btn-danger" onClick={() => handleDelete(avion.id)}>
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default AvionList

