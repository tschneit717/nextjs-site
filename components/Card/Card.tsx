import Image from 'next/image'

import { CardProps } from './Card.interface'
import styles from './Card.module.css'

export const Card = ({ title, subtitle, description, image, imageAlt }: CardProps) => {
  return (
    <div
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
