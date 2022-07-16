import { SplitTextProps } from './SplitText.interface'
import styles from './SplitText.module.css'

export const SplitText = ({ text }: SplitTextProps) => {
  return (
    <span className={styles.wrapper}>
      {text}
      <span className={styles.mask}><span className={styles.block}>{text}</span></span>
      <span className={styles.mask}><span className={styles.block}>{text}</span></span>
    </span>
  )
}
