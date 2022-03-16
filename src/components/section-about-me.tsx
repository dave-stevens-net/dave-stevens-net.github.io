import * as React from 'react'
import { styles } from './section-about-me.styles'
import { Icon } from '@blueprintjs/core'

const SectionAboutMe: React.FC = () => {
  return (
    <section className={styles.sectionDark}>
      <h2>About Me</h2>
      <div className={styles.row}>
        <div className={styles.colAvatar}>
          <img className={styles.avatar} src="assets/img/dave_stevens.jpg" />
          <h3>Dave Stevens</h3>
        </div>
        <div className={styles.colHistory}>
          <p>
            Over the years I&rsquo;ve had the privilege of working with several
            creative and successful teams. This experience has exposed me to
            every layer of web application development, from database modeling
            and service API design all the way up to UI graphic design and
            development. While I would consider myself a full stack developer, I
            specialize in front end development.
          </p>
          <h3>Educational Background</h3>
          <p>
            I have a Bachelor of Science degree in Computer Science from{' '}
            <a
              href="http://www.iastate.edu/"
              itemScope={true}
              itemProp="alumniOf"
              itemType="http://schema.org/Organization"
            >
              <span itemProp="name">Iowa State University</span>
            </a>
            .
          </p>
          <h3>Work Experience</h3>
          <div className={styles.workExperience}>
            <div className={styles.employer}>
              <div className={styles.empCol1}>
                <Icon icon="office" />
              </div>
              <div className={styles.empCol2}>
                <a
                  href="https://www.principal.com"
                  className={styles.employerName}
                >
                  Principal
                </a>
                <div>
                  <label>Location:</label> Des Moines, Iowa
                </div>
                <div>
                  <label>Duration:</label> (1991-2012)
                </div>
              </div>
            </div>
            <div className={styles.employer}>
              <div className={styles.empCol1}>
                <Icon icon="office" />
              </div>
              <div className={styles.empCol2}>
                <a href="https://shiftdsm.com/" className={styles.employerName}>
                  Slash Web Studios
                </a>
                <div>
                  <label>Location:</label> Des Moines, Iowa
                </div>
                <div>
                  <label>Duration:</label> (2012-2014)
                </div>
              </div>
            </div>
            <div className={styles.employer}>
              <div className={styles.empCol1}>
                <Icon icon="office" />
              </div>
              <div className={styles.empCol2}>
                <a href="https://tresta.com/" className={styles.employerName}>
                  Tresta
                </a>
                <div>
                  <label>Location:</label> Tallahassee, FL
                </div>
                <div>
                  <label>Duration:</label> (2014-2017)
                </div>
              </div>
            </div>
            <div className={styles.employer}>
              <div className={styles.empCol1}>
                <Icon icon="office" />
              </div>
              <div className={styles.empCol2}>
                <a
                  href="https://www.infinity-software.com/"
                  className={styles.employerName}
                >
                  Infinity Software Development
                </a>
                <div>
                  <label>Location:</label> Remote (Tallahassee, FL)
                </div>
                <div>
                  <label>Duration:</label> (2017-present)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionAboutMe
