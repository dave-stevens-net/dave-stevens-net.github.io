import { styles } from './section-skills.styles'
import SkillLevel from './skill-level'
import * as React from 'react'

const SectionSkills: React.FC = () => {
  return (
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
        <div className={styles.skillCategoryLabel}>Runtime Environments</div>
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
          <a href="https://github.com/db-migrate/node-db-migrate">db-migrate</a>
          <SkillLevel level={4} />
        </div>
      </div>
      <div className={styles.skillCategory}>
        <div className={styles.skillCategoryLabel}>
          Build / Testing Frameworks
        </div>
        <div className={styles.skill}>
          <a href="https://webpack.js.org/">Webpack</a>
          <SkillLevel level={4} />
        </div>
        <div className={styles.skill}>
          <a href="https://esbuild.github.io/">esbuild</a>
          <SkillLevel level={4} />
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
  )
}

export default SectionSkills
