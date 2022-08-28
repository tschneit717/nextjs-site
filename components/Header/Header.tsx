import { Nav } from '../Nav/Nav'
import routes from '../../constants/router.constant'
import styles from './Header.module.css'
import Image from 'next/image'

export function Header () {
  return (
    <header className={styles.header}>
      <Image src="/icons/ts_logo--light.svg" height={30} width={30} />
      <Nav routes={routes} />
    </header>
  )
}
