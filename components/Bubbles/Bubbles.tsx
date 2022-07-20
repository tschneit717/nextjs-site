import { memo } from 'react'
import { getRandomInt } from '../../utils/get-random-int'
import { BubblesProps } from './Bubbles.interface'
import styles from './Bubbles.module.css'

export const Bubbles = memo(function Bubbles ({ bubbleCount }: BubblesProps) {
  return (
    <div className={styles.bottomParticles}>
      {Array.from({ length: bubbleCount }, (_, k) => {
        const bubbleSpeed = `${getRandomInt(5000, 15000)}ms`
        const position = `${getRandomInt(0, 100)}%`
        const animationDelay = `${getRandomInt(0, 12000)}ms`
        return (
          <div style={{ left: position, animation: `blow ${bubbleSpeed} infinite`, animationDelay }} data-speed={bubbleSpeed} key={k} className={styles.bubble} />
        )
      })}
    </div>
  )
})
