import { NavLink } from 'react-router-dom'

import styles from "./css/NavBar.Module.css"

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink className={styles.link} to="/">
        Home
        </NavLink>
        <NavLink className={styles.link} to="/login">
        Login
        </NavLink>
        <NavLink className={styles.link} to="/cadastro">
        Cadastro
        </NavLink>
        <NavLink className={styles.link} to="/contato">
        Contato
        </NavLink>
        <NavLink className={styles.link} to="/sobre">
        Sobre
        </NavLink>
        <NavLink className={styles.link} to="/AppDois">
        AppDpois
        </NavLink>
    </nav>
  )
}

export default NavBar;