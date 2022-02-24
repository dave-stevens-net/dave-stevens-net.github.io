import * as React from 'react'
import LayoutProps from './layout-props'
import { styles } from './default-layout.styles'
import Footer from '../components/footer'
import HeaderNav from '../components/header-nav'
import { Helmet } from 'react-helmet'

const DefaultLayout: React.FC<LayoutProps> = ({
  children,
  frontmatter,
  assetsRoot,
}) => {
  const bodyClasses =
    frontmatter?.suppressBottomMargin?.trim() === 'true'
      ? styles.contentBody
      : `${styles.contentBody} ${styles.padContentBody}`
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
        <HeaderNav assetsRoot={assetsRoot} />
        <div className={bodyClasses}>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
