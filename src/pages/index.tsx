import * as React from 'react'
import { styles } from './index.styles'
import Footer from '../components/footer'
import { Helmet } from 'react-helmet'
import { Icon } from '@blueprintjs/core'
import { PageProps } from '../common/page-props'
import SectionSkills from '../components/section-skills'
import SectionProjects from '../components/section-projects'
import SectionAboutMe from '../components/section-about-me'

const HomePage: React.FC<PageProps> = ({ assetsRoot }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dave Stevens - Home Page</title>
        <meta
          name="description"
          content="The portfolio site for Dave Stevens, a UI developer and designer."
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${assetsRoot}favicons/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${assetsRoot}favicons/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${assetsRoot}favicons/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${assetsRoot}favicons/site.webmanifest`} />
      </Helmet>
      <div className={`${styles.container} bp4-dark`}>
        <div className={styles.topSection}>
          <h1>Dave Stevens</h1>
          <h2>UI Developer / Designer</h2>
          <p>
            Welcome to my portfolio site. I have extensive experience developing
            web and native mobile applications. However, my passion is designing
            easy to use user interfaces.
          </p>
        </div>
        <div className={styles.contentBody}>
          <section className={styles.sectionLight}>
            <h2>What I Do</h2>
            <div className={styles.cardRow}>
              <div className={styles.card}>
                <Icon icon="console" size={64} />
                <h3>Full Stack Development</h3>
                <p>
                  Whether it is rest APIs, database modeling, single page,
                  static generated or native UIs, I am flexible and skilled to
                  work on any aspect of software development.
                </p>
              </div>
              <div className={styles.card}>
                <Icon icon="draw" size={64} />
                <h3>Graphic Design</h3>
                <p>
                  I'm one of those rare left (analytical) and right (creative)
                  brained people. So, I really enjoy graphic design as well.
                  Check out my work in the project section.
                </p>
              </div>
              <div className={styles.card}>
                <Icon icon="form" size={64} />
                <h3>User Interface Design</h3>
                <p>
                  Empty states, loading indicators, workflow progress and
                  navigational context are all important aspects of making an
                  application easy to use.
                </p>
              </div>
            </div>
          </section>
          <SectionSkills />
          <SectionProjects />
          <SectionAboutMe />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default HomePage
