import { useState, useEffect } from "react"

function UserForm({ userToEdit, onFinish }) {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    secondSurname: "",
    email: "",
    phone: "",
    password: "",
  })

  useEffect(() => {
    if (userToEdit) setUser(userToEdit)
  }, [userToEdit])

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.id) {
      console.log('put user', user);
      const payload = {
        id: user.id,
        user: user
      }
      fetch(`http://localhost:8080/api/user/${user.id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(user)
      })
      /* updateUser(user.id, user).then(onFinish) */
    } else {
      console.log('post user', user);
      fetch(`http://localhost:8080/api/user`, {
        method: 'POST',
        headers: {
          "Content-Type": 'application/json'
        },        
        body: JSON.stringify(user)
      })
      /* createUser(user).then(onFinish) */
    }
    setUser({
      name: "",
      surname: "",
      secondSurname: "",
      email: "",
      phone: "",
      password: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-header">
        <span role="img" aria-label="Usuario" className="form-icon">
          👤
        </span>
        <h3>{user.id ? "Editar Usuario" : "Nuevo Usuario"}</h3>
      </div>

      <div className="form-fields">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Nombre"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="surname">Primer Apellido</label>
          <input
            id="surname"
            type="text"
            name="surname"
            placeholder="Primer apellido"
            value={user.surname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="secondSurname">Segundo Apellido</label>
          <input
            id="secondSurname"
            type="text"
            name="secondSurname"
            placeholder="Segundo apellido"
            value={user.secondSurname}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="correo@ejemplo.com"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Teléfono</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            placeholder="Número de teléfono"
            value={user.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type={user.id ? "text" : "password"}
            name="password"
            placeholder="Contraseña"
            value={user.password}
            onChange={handleChange}
            required={!user.id}
          />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="btn btn-primary">
          {user.id ? "Actualizar" : "Crear"}
        </button>
      </div>
    </form>
  )
}

export default UserForm

