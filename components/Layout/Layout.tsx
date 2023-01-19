import { FC, PropsWithChildren, useContext } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './Layout.module.css'
import { useFloat } from './../../hooks/use-float'
import { MousePositionContext } from '../../context/MousePositionContext'

import ParticleLogo from '../Particles/Particles'
import { TransitionContainer } from '../Transition/Transition'
export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const mouseCoordinates = useContext(MousePositionContext)
  const { x, y } = mouseCoordinates

  return (
    <>
      <TransitionContainer/>
      <Header />
      <div className={styles.wrapper}>
        <div className={styles.transformLayer} style={{ transform: useFloat(x, y, 5) }}>
          {children}
          <Footer />
        </div>
        <ParticleLogo/>
      </div>
    </>
  )
}
