import styles from './Transition.module.css'
import cn from 'classnames'
import { useContext } from 'react'
import { TransitionContext } from '../../context/TransitionContext'

export const TransitionContainer = () => {
  const { transitionStatus } = useContext(TransitionContext)

  // Outer wrapper to position
  return (
    <div data-status={transitionStatus} className={styles.transitionContainer}>
      {/* Blue container */}
      <div className={cn(styles.bar, styles.primary)}></div>
      {/* white stripe */}
      <div className={cn(styles.bar, styles.light)}></div>
      {/* magenta container */}
      <div className={cn(styles.bar, styles.secondary)}></div>
    </div>
  )
}
