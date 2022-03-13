import * as React from 'react'
import { styles } from './section-projects.styles'
import { Button, Card, Classes, Dialog, Icon, Tag } from '@blueprintjs/core'
import LazyImage from './lazy-image'

const SectionProjects: React.FC = () => {
  const [p1IsOpen, setP1IsOpen] = React.useState<boolean>(false)
  const [p2IsOpen, setP2IsOpen] = React.useState<boolean>(false)
  const [p3IsOpen, setP3IsOpen] = React.useState<boolean>(false)
  const [p4IsOpen, setP4IsOpen] = React.useState<boolean>(false)

  return (
    <section className={styles.sectionLight}>
      <h2>Projects</h2>

      <Card className={styles.projectCard}>
        <Icon icon="mobile-phone" className={styles.projectIcon} />
        <div>
          <h5>Utility Company Billing / Usage iOS App</h5>
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
          <Button
            className={styles.viewButton}
            icon="share"
            outlined={true}
            text="View Screenshots"
            onClick={() => setP1IsOpen(true)}
          />
          <div className={styles.tagList}>
            <Tag icon="console" minimal={true} round={true}>
              programming
            </Tag>
          </div>
        </div>
      </Card>
      <Dialog
        isOpen={p1IsOpen}
        title="Utility Billing / Usage iOS App"
        className={`${styles.dialog} bp4-dark`}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        onClose={() => setP1IsOpen(false)}
      >
        <div className={`${styles.dialogBody} ${Classes.DIALOG_BODY}`}>
          <LazyImage src="assets/img/p1_login.png" width="half" ht="100" />
          <LazyImage
            src="assets/img/p1_billing_history1.png"
            width="half"
            ht="100"
          />
          <LazyImage
            src="assets/img/p1_billing_history2.png"
            width="half"
            ht="100"
          />
          <LazyImage
            src="assets/img/p1_billing_history3.png"
            width="half"
            ht="100"
          />
          <Button
            onClick={() => setP1IsOpen(false)}
            text="Close"
            outlined={true}
          />
        </div>
      </Dialog>

      <Card className={styles.projectCard}>
        <Icon icon="mobile-phone" className={styles.projectIcon} />
        <div>
          <h5>Utility Company Billing / Usage Android App</h5>
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
          <Button
            className={styles.viewButton}
            icon="share"
            outlined={true}
            text="View Screenshots"
            onClick={() => setP2IsOpen(true)}
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
      <Dialog
        isOpen={p2IsOpen}
        title="Utility Billing / Usage Android App"
        className={`${styles.dialog} bp4-dark`}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        onClose={() => setP2IsOpen(false)}
      >
        <div className={`${styles.dialogBody} ${Classes.DIALOG_BODY}`}>
          <LazyImage src="assets/img/p2_login.png" width="half" ht="100" />
          <LazyImage src="assets/img/p2_home.png" width="half" ht="100" />
          <LazyImage
            src="assets/img/p2_link_membership.png"
            width="half"
            ht="100"
          />
          <LazyImage
            src="assets/img/p2_billing_history.png"
            width="half"
            ht="100"
          />
          <LazyImage
            src="assets/img/p2_billing_history2.png"
            width="half"
            ht="100"
          />
          <LazyImage
            src="assets/img/p2_billing_history3.png"
            width="half"
            ht="100"
          />
          <LazyImage src="assets/img/p2_add_card.png" width="half" ht="100" />
          <Button
            onClick={() => setP2IsOpen(false)}
            text="Close"
            outlined={true}
          />
        </div>
      </Dialog>

      <Card className={styles.projectCard}>
        <Icon icon="desktop" className={styles.projectIcon} />
        <div>
          <h5>Utility Company Billing / Usage Web App</h5>
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
          <Button
            className={styles.viewButton}
            icon="share"
            outlined={true}
            text="View Screenshots"
            onClick={() => setP3IsOpen(true)}
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
      <Dialog
        isOpen={p3IsOpen}
        title="Utility Billing / Usage Web App"
        className={`${styles.dialog} bp4-dark`}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        onClose={() => setP3IsOpen(false)}
      >
        <div className={`${styles.dialogBody} ${Classes.DIALOG_BODY}`}>
          <LazyImage src="assets/img/p3_billing.png" width="wide" ht="300" />
          <LazyImage src="assets/img/p3_charts_bar.png" width="wide" ht="300" />
          <LazyImage src="assets/img/p3_charts_pie.png" width="wide" ht="300" />
          <LazyImage
            src="assets/img/p3_billing_payment_methods_empty.png"
            width="wide"
            ht="300"
          />
          <Button
            onClick={() => setP3IsOpen(false)}
            text="Close"
            outlined={true}
          />
        </div>
      </Dialog>

      <Card className={styles.projectCard}>
        <Icon icon="desktop" className={styles.projectIcon} />
        <div>
          <h5>Utility Company Boil Water Notice Management Web App</h5>
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
          <Button
            className={styles.viewButton}
            icon="share"
            outlined={true}
            text="View Screenshots"
            onClick={() => setP4IsOpen(true)}
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
      <Dialog
        isOpen={p4IsOpen}
        title="Insurance Marketer Web Portal"
        className={`${styles.dialog} bp4-dark`}
        canEscapeKeyClose={true}
        canOutsideClickClose={true}
        onClose={() => setP4IsOpen(false)}
      >
        <div className={`${styles.dialogBody} ${Classes.DIALOG_BODY}`}>
          <LazyImage src="assets/img/p4_dashboard.png" width="wide" ht="300" />
          <LazyImage
            src="assets/img/p4_create_account_p1.png"
            width="wide"
            ht="300"
          />
          <LazyImage
            src="assets/img/p4_create_account_p2.png"
            width="wide"
            ht="300"
          />
          <LazyImage src="assets/img/p4_city.png" width="wide" ht="300" />
          <LazyImage src="assets/img/p4_post_bind.png" width="wide" ht="300" />
          <LazyImage
            src="assets/img/p4_tabs_permissions.png"
            width="wide"
            ht="300"
          />
          <LazyImage
            src="assets/img/p4_user_detail.png"
            width="wide"
            ht="300"
          />
          <LazyImage
            src="assets/img/p4_user_groups.png"
            width="wide"
            ht="300"
          />
          <Button
            onClick={() => setP4IsOpen(false)}
            text="Close"
            outlined={true}
          />
        </div>
      </Dialog>
    </section>
  )
}

export default SectionProjects
