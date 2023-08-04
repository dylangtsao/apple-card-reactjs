import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.backdrop}></div>
      {/* nav-bar + mobile-nav */}
      <section>
        <div className={styles.nav}>
          <h1 className={styles.title}>Apple Card</h1>
          <div className={styles.nav_right}>
            <div className={styles.dropdown}>
              <div className={styles.dropdown_line}></div>
              <div className={styles.dropdown_line}></div>
              <div className={styles.dropdown_line}></div>
            </div>
            <div className={styles.nav_links}>
              <a>Overview</a>
              <a>Features</a>
              <a>Family</a>
              <a>Monthly Installments</a>
              <a>How-To Videos</a>
            </div>
            <div className={styles.apply_backdrop}>
              <h2 className={styles.apply}>Apply now</h2>
            </div>
          </div>
        </div>
      </section>
      {/* intro */}
      <section>
        <div className={styles.intro}>
          <Image src="/intro_title.svg" width={320} height={95} alt="apple card" className={styles.intro_svg}></Image>
          <div className={styles.intro_subtitle_backdrop}>
            <a className={styles.intro_subtitle}>Apply now</a>
          </div>
        </div>
        <div className={styles.subtitle_backdrop}>
          <a>With every purchase, get up 3% Daily Cash back to spend or save. <a href="./page.tsx" className={styles.subtitle_link}>Apply now</a>{' >'}</a>
        </div>
      </section>
    </main>
  )
}
