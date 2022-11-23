import styles from './Transition.module.css'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const TransitionContainer = () => {
  const router = useRouter()
  const [isTransitioning, toggleIsTransitioning] = useState(false)

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      )
      toggleIsTransitioning(true)
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])
  // Outer wrapper to position
  return (
    <div onAnimationEnd={() => toggleIsTransitioning(false)} data-hidden={!isTransitioning} className={styles.transitionContainer}>
      {/* Blue container */}
      <div className={cn(styles.bar, styles.primary)}></div>
      {/* white stripe */}
      <div className={cn(styles.bar, styles.light)}></div>
      {/* magenta container */}
      <div className={cn(styles.bar, styles.secondary)}></div>
    </div>
  )
}
