import cn from 'classnames'
import { MobileNavMenuButtonProps } from './MobileNavMenuButton.interface'
import styles from './MobileNavMenuButton.module.css'
export function MobileNavMenuButton ({ callback, state }: MobileNavMenuButtonProps) {
  return (
    <button className={cn(styles.button, { [styles.active]: state })} onClick={callback}>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
      <span className={styles.bar}></span>
    </button>
  )
}
