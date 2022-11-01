import { Nav } from '../Nav/Nav'
import routes from '../../constants/router.constant'
import styles from './Header.module.css'
import Image from 'next/image'
import { MobileNavMenuButton } from '../MobileNavMenuButton/MobileNavMenuButton'
import { useState } from 'react'

export function Header () {
  const [mobileNavActive, toggleMobileNavActive] = useState(false)
  return (
    <header className={styles.header}>
      <Image src="/icons/ts_logo--light.svg" height={30} width={30} />
      <Nav routes={routes} mobileNavActive={mobileNavActive} />
      <MobileNavMenuButton state={mobileNavActive} callback={() => toggleMobileNavActive(!mobileNavActive)} />
    </header>
  )
}
