
import { useState, useEffect } from "react"

function AvionForm({ avionToEdit, onFinish }) {
  const [avion, setAvion] = useState({
    modelo: "",
    matricula: "",
    capacidad: "",
    tipo: "",
    estado: "",
  })

  useEffect(() => {
    if (avionToEdit) setAvion(avionToEdit)
  }, [avionToEdit])

  const handleChange = (e) => {
    setAvion({ ...avion, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (avion.id) {
      /* updateAvion(avion.id, avion).then(onFinish) */
    } else {
      /* createAvion(avion).then(onFinish) */
    }
    setAvion({ modelo: "", matricula: "", capacidad: "", tipo: "", estado: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-header">
        <span role="img" aria-label="Avión" className="form-icon">
          ✈️
        </span>
        <h3>{avion.id ? "Editar Avión" : "Nuevo Avión"}</h3>
      </div>

      <div className="form-fields">
        <div className="form-group">
          <label htmlFor="modelo">Modelo</label>
          <input
            id="modelo"
            type="text"
            name="modelo"
            placeholder="Ej: Airbus A320"
            value={avion.modelo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="matricula">Matrícula</label>
          <input
            id="matricula"
            type="text"
            name="matricula"
            placeholder="Ej: EC-123"
            value={avion.matricula}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="capacidad">Capacidad</label>
          <input
            id="capacidad"
            type="number"
            name="capacidad"
            placeholder="Número de pasajeros"
            value={avion.capacidad}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="tipo">Tipo</label>
          <select id="tipo" name="tipo" value={avion.tipo} onChange={handleChange} required>
            <option value="">Seleccionar tipo</option>
            <option value="Comercial">Comercial</option>
            <option value="Carga">Carga</option>
            <option value="Privado">Privado</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="estado">Estado</label>
          <select id="estado" name="estado" value={avion.estado} onChange={handleChange} required>
            <option value="">Seleccionar estado</option>
            <option value="Activo">Activo</option>
            <option value="Mantenimiento">Mantenimiento</option>
            <option value="Inactivo">Inactivo</option>
          </select>
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {avion.id ? "Actualizar" : "Crear"}
        </button>
      </div>
    </form>
  )
}

export default AvionForm

