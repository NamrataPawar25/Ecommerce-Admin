import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Link } from 'react-router-dom'

const NavbarTop = () => {
  const { loggedUser, logout } = useContext(AuthContext)

  return (
    <nav className="navbar navbar-light bg-light px-3">
      {/* Logo / Brand */}
      <Link className="navbar-brand" to="/dashboard">
        ECOMMERCE
      </Link>

      {/* Right Side */}
      <div className="d-flex align-items-center ms-auto">
        {loggedUser ? (
          <>
            <i className="me-2 text-dark">{loggedUser.name}</i>
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={logout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-sm btn-outline-primary me-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-sm btn-primary" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default NavbarTop
