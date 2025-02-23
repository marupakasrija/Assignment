import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, login } from "../redux/authSlice"
import styles from "./Navigation.module.css"

const Navigation = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="/">Courses</Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <button onClick={() => dispatch(logout())}>Logout</button>
            </li>
          </>
        ) : (
          <li>
            <button onClick={() => dispatch(login())}>Login</button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Navigation

