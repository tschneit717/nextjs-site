import Image from 'next/image'
import { useContext } from 'react'
import { MousePositionContext } from '../../context/MousePositionContext'
import { useFloat } from '../../hooks/use-float'
import { CardProps } from './Card.interface'
import styles from './Card.module.css'

export const Card = ({ title, subtitle, description, image, imageAlt }: CardProps) => {
  const mouseCoordinates = useContext(MousePositionContext)
  const { x, y } = mouseCoordinates
  return (
    <div
      style={{ transform: useFloat(x, y, -20) }}
      className={styles.card}>
      {image && <div className={styles.imageWrapper}>
        <Image layout='fill' src={image} alt={imageAlt}/>
      </div>}
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {description && <div className={styles.content}>
        <p className={styles.description}>{description}</p>
      </div>}
    </div>
  )
}
