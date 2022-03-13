import * as React from 'react'
import { styles } from './section-projects.styles'
import { AnchorButton, Card, Icon, Tag } from '@blueprintjs/core'

const SectionProjects: React.FC = () => {
  return (
    <section className={styles.sectionLight}>
      <h2>Projects</h2>

      <Card className={styles.projectCard}>
        <Icon icon="mobile-phone" className={styles.projectIcon} />
        <div>
          <h5>Talquin Electric iOS App</h5>
          <div className={styles.projectDatum}>
            <label>Duration:</label> Aug. 2017 - Dec. 2017
          </div>
          <ul className={styles.activities}>
            <li>
              Developed native iOS application showing customer utility usage
              and billing information. Customers can input or scan credit card
              information for convenient billing payment.
            </li>
            <li>
              Used JetBrains AppCode to program the UI using the Swift
              programming language.
            </li>
          </ul>
          <AnchorButton
            className={styles.viewButton}
            icon="share"
            outlined={true}
            text="View On App Store"
            href="https://apps.apple.com/us/app/talquin/id1352526269"
          />
          <div className={styles.tagList}>
            <Tag icon="console" minimal={true} round={true}>
              programming
            </Tag>
          </div>
        </div>
      </Card>

      <Card className={styles.projectCard}>
        <Icon icon="mobile-phone" className={styles.projectIcon} />
        <div>
          <h5>Talquin Electric Android App</h5>
          <div className={styles.projectDatum}>
            <label>Duration:</label> April 2018 - July 2018
          </div>
          <ul className={styles.activities}>
            <li>
              Produced the graphic design for all screen layouts with full color
              mockups.
            </li>
            <li>
              Developed native Android application showing customer utility
              usage and billing information. Customers can input or scan credit
              card information for convenient billing payment.
            </li>
            <li>
              Used Android Studio to program the UI using the Kotlin programming
              language.
            </li>
          </ul>
          <AnchorButton
            className={styles.viewButton}
            icon="share"
            outlined={true}
            text="View On App Store"
            href="https://play.google.com/store/apps/details?id=com.talquinelectric.android&hl=en_US"
          />
          <div className={styles.tagList}>
            <Tag icon="console" minimal={true} round={true}>
              programming
            </Tag>
            <Tag icon="form" minimal={true} round={true}>
              ui / ux
            </Tag>
            <Tag icon="draw" minimal={true} round={true}>
              graphic design
            </Tag>
          </div>
        </div>
      </Card>

      <Card className={styles.projectCard}>
        <Icon icon="desktop" className={styles.projectIcon} />
        <div>
          <h5>Talquin Electric Web App</h5>
          <div className={styles.projectDatum}>
            <label>Duration:</label> Jan. 2018 - Nov. 2018
          </div>
          <ul className={styles.activities}>
            <li>
              Produced the graphic design for all screen layouts with full color
              mockups.
            </li>
            <li>
              Developed React single page web application showing customer
              utility usage and billing information. Customers can input credit
              card information for convenient billing payment.
            </li>
          </ul>
          <div className={styles.tagList}>
            <Tag icon="console" minimal={true} round={true}>
              programming
            </Tag>
            <Tag icon="form" minimal={true} round={true}>
              ui / ux
            </Tag>
            <Tag icon="draw" minimal={true} round={true}>
              graphic design
            </Tag>
          </div>
        </div>
      </Card>

      <Card className={styles.projectCard}>
        <Icon icon="desktop" className={styles.projectIcon} />
        <div>
          <h5>Talquin Electric Boil Water Notice Management Web App</h5>
          <div className={styles.projectDatum}>
            <label>Duration:</label> May 2019 - Aug. 2019
          </div>
          <ul className={styles.activities}>
            <li>
              Produced conceptual wireframes (Balsamiq) for user interface
              design.
            </li>
            <li>
              Produced the graphic design for all screen layouts with full color
              mockups.
            </li>
            <li>
              Developed React/TypeScript single page web application used to
              manage boil water notices. The application queried an ArcGIS
              server for water meter locations. Users can draw water outage
              regions to capture customer locations for notifications.
            </li>
          </ul>
          <div className={styles.tagList}>
            <Tag icon="console" minimal={true} round={true}>
              programming
            </Tag>
            <Tag icon="form" minimal={true} round={true}>
              ui / ux
            </Tag>
            <Tag icon="draw" minimal={true} round={true}>
              graphic design
            </Tag>
          </div>
        </div>
      </Card>

      <Card className={styles.projectCard}>
        <Icon icon="desktop" className={styles.projectIcon} />
        <div>
          <h5>Surplus Lines Insurance Marketer Web Portal</h5>
          <div className={styles.projectDatum}>
            <label>Duration:</label> Oct. 2019 - present
          </div>
          <ul className={styles.activities}>
            <li>
              Produced conceptual wireframes (Balsamiq) for user interface
              design.
            </li>
            <li>
              Produced the graphic design for all screen layouts with full color
              mockups.
            </li>
            <li>
              Developed Angular/TypeScript single page web application used by
              insurance marketers to manage their insurance quotes and policies.
            </li>
            <li>
              Developed Node.js/TypeScript backend Express app run in Google
              Cloud Platform Kubernetes containers. Also wrote backend pub/sub
              import processes using cloud functions.
            </li>
          </ul>
          <div className={styles.tagList}>
            <Tag icon="console" minimal={true} round={true}>
              programming
            </Tag>
            <Tag icon="form" minimal={true} round={true}>
              ui / ux
            </Tag>
            <Tag icon="draw" minimal={true} round={true}>
              graphic design
            </Tag>
          </div>
        </div>
      </Card>
    </section>
  )
}

export default SectionProjects
