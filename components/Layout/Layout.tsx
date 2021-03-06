import { FC, PropsWithChildren, useContext } from 'react'
import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import styles from './Layout.module.css'
import { useFloat } from './../../hooks/use-float'
import { MousePositionContext } from '../../context/MousePositionContext'
import { Bubbles } from '../Bubbles/Bubbles'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  const mouseCoordinates = useContext(MousePositionContext)
  const { x, y } = mouseCoordinates
  return (
    <div className={styles.wrapper}>
      <div className={styles.transformLayer} style={{ transform: useFloat(x, y, 10) }}>
        <Header />
        {children}
        <Footer />
      </div>
      <Bubbles bubbleCount={100}/>
    </div>
  )
}
