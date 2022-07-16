import { FC, PropsWithChildren, useEffect, useState } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './Layout.module.css'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [transformSettings, setTransformSettings] = useState('')

  useEffect(() => {
    const w = window.innerWidth
    const h = window.innerHeight
    window.addEventListener('mousemove', (e: MouseEvent) => {
      const offsetX = 0.5 - e.pageX / w // cursor position X
      const offsetY = 0.5 - e.pageY / h // cursor position Y
      const multiplier = 10
      setTransformSettings('translate3d(0, ' + -offsetX * multiplier + 'px, 0) rotateX(' + (-offsetY * multiplier) + 'deg) rotateY(' + (offsetX * (multiplier * 2)) + 'deg)')
      // get angle between 0-360
    })
  }, [])
  return (
    <div className={styles.wrapper}>
      <div className={styles.transformLayer} style={{ transform: transformSettings }}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}
