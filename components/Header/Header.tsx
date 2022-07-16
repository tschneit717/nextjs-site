import { Nav } from '../Nav/Nav'
import routes from '../../constants/router.constant'
import styles from './Header.module.css'

export function Header () {
  return (
    <header className={styles.header}>
      <h2 className={styles.title}>Tom Schneider</h2>
      <Nav routes={routes} />
    </header>
  )
}
