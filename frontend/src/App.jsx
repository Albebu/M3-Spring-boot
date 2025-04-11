import { useState } from "react"
import UserList from "./components/UserList"
import UserForm from "./components/UserForm"
import AvionList from "./components/AvionList"
import AvionForm from "./components/AvionForm"
import "./App.css"

function App() {
  const [editingUser, setEditingUser] = useState(null)
  const [editingAvion, setEditingAvion] = useState(null)
  const [reload, setReload] = useState(false)
  const [activeTab, setActiveTab] = useState("aviones")

  const refresh = () => setReload(!reload)

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <img src="/Logo_Vueling.svg" alt="Vueling" className="logo-icon" width="32" height="32" />
          <h1>Monlau Admin</h1>
        </div>
        <nav className="main-nav">
          <button
            className={`nav-button ${activeTab === "aviones" ? "active" : ""}`}
            onClick={() => setActiveTab("aviones")}
          >
            <span role="img" aria-label="Aviones">
              ✈️
            </span>
            Aviones
          </button>
          <button
            className={`nav-button ${activeTab === "usuarios" ? "active" : ""}`}
            onClick={() => setActiveTab("usuarios")}
          >
            <span role="img" aria-label="Usuarios">
              👥
            </span>
            Usuarios
          </button>
        </nav>
      </header>

      <main className="main-content">
        {activeTab === "usuarios" && (
          <section className="section">
            <div className="section-header">
              <h2>Gestión de Usuarios</h2>
            </div>
            <div className="content-grid">
              <div className="form-container">
                <UserForm
                  userToEdit={editingUser}
                  onFinish={() => {
                    setEditingUser(null)
                    refresh()
                  }}
                />
              </div>
              <div className="list-container">
                <UserList key={reload} onEdit={setEditingUser} />
              </div>
            </div>
          </section>
        )}

        {activeTab === "aviones" && (
          <section className="section">
            <div className="section-header">
              <h2>Gestión de Aviones</h2>
            </div>
            <div className="content-grid">
              <div className="form-container">
                <AvionForm
                  avionToEdit={editingAvion}
                  onFinish={() => {
                    setEditingAvion(null)
                    refresh()
                  }}
                />
              </div>
              <div className="list-container">
                <AvionList key={`avion-${reload}`} onEdit={setEditingAvion} />
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Vueling Monlau - Gestión de Aerolíneas</p>
      </footer>
    </div>
  )
}

export default App

