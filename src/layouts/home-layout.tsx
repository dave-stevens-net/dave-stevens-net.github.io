import * as React from 'react'
import LayoutProps from './layout-props'
import { styles } from './home-layout.styles'
import Footer from '../components/footer'
import { Helmet } from 'react-helmet'

const HomeLayout: React.FC<LayoutProps> = ({
  children,
  frontmatter,
  assetsRoot,
}) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Dave Stevens</title>
        {frontmatter.description && (
          <meta name="description" content={frontmatter.description} />
        )}
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
        <div className={styles.contentBody}>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default HomeLayout
