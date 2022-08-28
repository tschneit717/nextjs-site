import Link from 'next/link'
import { NavProps } from './Nav.interface'
import styles from './Nav.module.css'
import cn from 'classnames'
import { useRouter } from 'next/router'

export const Nav = ({ routes }: NavProps) => {
  const router = useRouter()
  routes.map(item => {
  })
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {routes.map(route => (
          <li className={cn(styles.navListItem, router.pathname === route.path && styles.activeLink)} key={route.path} >
            <Link className={styles.navLink} href={route.path}>
              {route.name}
            </Link>
          </li>
        )
        )}
      </ul>
    </nav>
  )
}
