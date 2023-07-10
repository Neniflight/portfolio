import Image from 'next/image'
import styles from './page.module.css'
import RootLayout from './layout'

export default function Home() {
  return (
    <main>
      <div className={styles.hexagon}>
      </div>
      <a>
        <button className={`${styles.primary_but} ${styles.top}`}>Personal Projects</button>
      </a>
      <a>
        <button className={`${styles.primary_but} ${styles.top_right}`}>About Me</button>
      </a>
      <a>
        <button className={`${styles.primary_but} ${styles.bottom_right}`}>Contact Me</button>
      </a>
      <a>
        <button className={`${styles.primary_but} ${styles.bottom_left}`}>Professional Experience</button>
      </a>
      <a>
        <button className={`${styles.primary_but} ${styles.top_left}`}>Goals</button>
      </a>
      <a>
        <button className={`${styles.primary_but} ${styles.bottom}`}>Album</button>
      </a>
    </main>
  )
}
