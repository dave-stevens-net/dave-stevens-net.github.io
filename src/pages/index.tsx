import * as React from 'react'
import { styles } from './index.styles'
import Footer from '../components/footer'
import { Helmet } from 'react-helmet'
import { Icon } from '@blueprintjs/core'
import { PageProps } from '../common/page-props'
import SkillLevel from '../components/skill-level'

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
      <div className={styles.container}>
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
          <section className={styles.sectionDark}>
            <h2>Skills</h2>
            <div className={styles.skillCategory}>
              <div className={styles.skillCategoryLabel}>UI Frameworks</div>
              <div className={styles.skill}>
                <a href="https://reactjs.org/">React</a>
                <SkillLevel level={4} />
              </div>
              <div className={styles.skill}>
                <a href="https://angular.io/">Angular</a>
                <SkillLevel level={4} />
              </div>
              <div className={styles.skill}>
                <a href="https://vuejs.org/">Vue</a>
                <SkillLevel level={2} />
              </div>
            </div>
            <div className={styles.skillCategory}>
              <div className={styles.skillCategoryLabel}>
                Component Libraries / Styling Frameworks
              </div>
              <div className={styles.skill}>
                <a href="https://mui.com/">Material UI</a>
                <SkillLevel level={4} />
              </div>
              <div className={styles.skill}>
                <a href="https://material.angular.io/">Angular Material</a>
                <SkillLevel level={4} />
              </div>
              <div className={styles.skill}>
                <a href="https://blueprintjs.com/">Blueprint</a>
                <SkillLevel level={4} />
              </div>
              <div className={styles.skill}>
                <a href="https://linaria.dev/">Linaria</a>
                <SkillLevel level={4} />
              </div>
              <div className={styles.skill}>
                <a href="https://cssinjs.org/">JSS</a>
                <SkillLevel level={4} />
              </div>
              <div className={styles.skill}>
                <a href="https://styled-components.com/">Styled Components</a>
                <SkillLevel level={3} />
              </div>
            </div>
            <div className={styles.skillCategory}>
              <div className={styles.skillCategoryLabel}>
                Runtime Environments
              </div>
              <div className={styles.skill}>
                <a href="https://nodejs.org/">Node.js</a>
                <SkillLevel level={4} />
              </div>
              <div className={styles.skill}>
                .NET Core
                <SkillLevel level={2} />
              </div>
            </div>
            <div className={styles.skillCategory}>
              <div className={styles.skillCategoryLabel}>Languages</div>
              <div className={styles.skill}>
                <span>
                  JavaScript /{' '}
                  <a href="https://www.typescriptlang.org/">TypeScript</a>
                </span>
                <SkillLevel level={4} />
              </div>
              <div className={styles.skill}>
                <a href="https://www.swift.org/">Swift</a>
                <SkillLevel level={3} />
              </div>
              <div className={styles.skill}>
                <a href="https://kotlinlang.org/">Kotlin</a>
                <SkillLevel level={3} />
              </div>
              <div className={styles.skill}>
                C#
                <SkillLevel level={2} />
              </div>
            </div>
            <div className={styles.skillCategory}>
              <div className={styles.skillCategoryLabel}>
                Backend / Cloud Technologies
              </div>
              <div className={styles.skill}>
                <span>
                  <a href="https://cloud.google.com/">Google Cloud Platform</a>{' '}
                  <span className={styles.subText}>
                    (Kubernetes, Cloud Functions, Storage, PubSub, Workflows,
                    Monitoring)
                  </span>
                </span>
                <SkillLevel level={4} />
              </div>
              <div className={styles.skill}>
                S3 Storage
                <SkillLevel level={4} />
              </div>
              <div className={styles.skill}>
                PostgreSQL, MySQL, Redis
                <SkillLevel level={4} />
              </div>
              <div className={styles.skill}>
                Gitlab CI/CD
                <SkillLevel level={4} />
              </div>
              <div className={styles.skill}>
                Docker
                <SkillLevel level={3} />
              </div>
              <div className={styles.skill}>
                <a href="https://github.com/db-migrate/node-db-migrate">
                  db-migrate
                </a>
                <SkillLevel level={4} />
              </div>
            </div>
            <div className={styles.skillCategory}>
              <div className={styles.skillCategoryLabel}>
                Testing Frameworks
              </div>
              <div className={styles.skill}>
                <a href="https://jestjs.io/">Jest</a>
                <SkillLevel level={3} />
              </div>
              <div className={styles.skill}>
                <a href="https://mochajs.org/">Mocha</a>
                <SkillLevel level={3} />
              </div>
              <div className={styles.skill}>
                <a href="https://github.com/dvabuzyarov/moq.ts">moq.ts</a>
                <SkillLevel level={4} />
              </div>
            </div>
          </section>
          <section className={styles.sectionLight}>
            <h2>Projects</h2>
          </section>
          <section className={styles.sectionDark}>
            <h2>About Me</h2>
          </section>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default HomePage
