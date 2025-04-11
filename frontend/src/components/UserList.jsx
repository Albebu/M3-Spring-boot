import { useEffect, useState } from "react"

function UserList({ onEdit }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/user') // Cambia esto por tu endpoint
        .then(response => response.json())
        .then(data => {
            console.log(data); // Verificar que es un array
            setUsers(data);
        })
        .catch(error => console.error('Error al cargar usuarios:', error));
}, []);

  const handleDelete = async (id) => {
    setUsers(users.filter(item => item.id !== id))
    const response = await fetch(`http://localhost:8080/api/user/${id}`, {
      method: 'DELETE'
    });

    console.log(response);
  }

  return (
    <div className="list-wrapper">
      <div className="list-header">
        <h3>Listado de Usuarios</h3>
        <span className="counter">{users.length} usuarios</span>
      </div>

      {users.length === 0 ? (
        <div className="empty-state">
          <p>No hay usuarios registrados</p>
        </div>
      ) : (
        <ul className="data-list">
          {users.map((user, id) => (
            <li key={id} className="list-item">
              <div className="item-content">
                <div className="item-main">
                  <h4>
                    {user.name} {user.surname} {user.secondSurname}
                  </h4>
                </div>
                <div className="item-details">
                  <span className="detail-item with-icon">
                    <span role="img" aria-label="Email">
                      📧
                    </span>
                    {user.email}
                  </span>
                  <span className="detail-item with-icon">
                    <span role="img" aria-label="Teléfono">
                      📱
                    </span>
                    {user.phone}
                  </span>
                </div>
              </div>
              <div className="item-actions">
                <button className="btn btn-icon" onClick={() => onEdit(user)} title="Editar">
                  ✏️
                </button>
                <button className="btn btn-icon btn-danger" onClick={() => handleDelete(user.id)} title="Eliminar">
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UserList

