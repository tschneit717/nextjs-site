import { NavProps } from './Nav.interface'
import styles from './Nav.module.css'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { TransitionContext } from '../../context/TransitionContext'

export const Nav = ({ routes, mobileNavActive }: NavProps) => {
  const router = useRouter()
  const { routerWrapper } = useContext(TransitionContext)
  return (
    <nav className={cn(styles.nav, { [styles.active]: mobileNavActive })}>
      <ul className={styles.navList}>
        {routes.map(route => (
          <li className={cn(styles.navListItem, router.pathname === route.path && styles.activeLink)} key={route.path} >
            <a className={styles.navLink} onClick={() => { routerWrapper.push(route.path) }}>
              {route.name}
            </a>
          </li>
        )
        )}
      </ul>
    </nav>
  )
}
