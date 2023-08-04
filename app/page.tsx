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
          <a>With every purchase, get up 3% Daily Cash back to spend or save. <a className={styles.subtitle_link}>Apply now</a>{' >'}</a>
        </div>
      </section>
      {/* First header */}
      <section>
        <div className={styles.first_header}>
          <h1>The simplicity of Apple. <br></br>In a credit card.</h1>
          <p>With Apple Card, we completely reinvented the credit card. 
            Your information lives on your iPhone, beautifully laid out and easy to understand. 
            We eliminated fees1 and built tools to help you pay less interest,
             and you can apply in minutes to see if you are approved with no impact to your credit score.
             Advanced technologies like Face ID, Touch ID, and Apple Pay give you an enhanced level 
             of privacy and security. And with every purchase you get Daily Cash back that you can spend 
             or save. Apple Card. It&apos;s everything a credit card should be.</p>
        </div>
      </section>
    </main>
  )
}
