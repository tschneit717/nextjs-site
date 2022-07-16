import styles from './Footer.module.css'
import GitHubIcon from './../../assets/images/icons/GitHub.svg'
import Link from 'next/link'
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      Tom Schneider © {new Date().getFullYear()} <span>-</span>
      <Link href="https://github.com/tschneit717">
        <a target="_blank" className={styles.github}>
          <GitHubIcon/> GitHub
        </a>
      </Link>
    </footer>
  )
}
