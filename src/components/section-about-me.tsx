import * as React from 'react'
import { styles } from './section-about-me.styles'

const SectionAboutMe: React.FC = () => {
  return (
    <section className={styles.sectionDark}>
      <h2>About Me</h2>
      <div className={styles.row}>
        <div className={styles.colAvatar}>
          <img className={styles.avatar} src="assets/img/dave_stevens.jpg" />
        </div>
        <div className={styles.colHistory}>

        </div>
      </div>
    </section>
  )
}

export default SectionAboutMe
