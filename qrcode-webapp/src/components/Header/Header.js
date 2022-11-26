import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <nav className={styles.navbar}>
        <ul>
            <Link to="/" className={styles.title}>Darius QRCode Generator</Link>
            <Link to="/about">About</Link>
        </ul>
    </nav>
  )
}
