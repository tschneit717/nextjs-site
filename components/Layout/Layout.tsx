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
      const dy = e.pageY - h / 2 // @h/2 = center of poster
      const dx = e.pageX - w / 2 // @w/2 = center of poster
      const theta = Math.atan2(dy, dx) // angle between cursor and center of poster in RAD
      let angle = theta * 180 / Math.PI - 90 // convert rad in degrees
      const offsetPoster = 12
      setTransformSettings('translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)')
      // get angle between 0-360
      if (angle < 0) {
        angle = angle + 360
      }
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
