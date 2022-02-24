import * as React from 'react'
import { styles } from './header-nav.styles'
import { Button, Menu, MenuItem, Position } from '@blueprintjs/core'
import { Popover2 } from '@blueprintjs/popover2'

const HeaderNav: React.FC<{ assetsRoot: string }> = ({ assetsRoot }) => {
  const aboutItems = (
    <>
      <MenuItem text="Purpose" href="/about/purpose.html" />
      <MenuItem text="Leadership" href="/about/leadership.html" />
      <MenuItem text="What We Believe" href="/about/what-we-believe.html" />
      <MenuItem
        text="What To Expect When Visiting"
        href="/about/what-to-expect.html"
      />
      <MenuItem text="Church Life" href="/about/church-life.html" />
    </>
  )
  const aboutUsMenu = <Menu>{aboutItems}</Menu>
  const fullMenu = (
    <Menu className={styles.phoneMenu}>
      <MenuItem text="About...">{aboutItems}</MenuItem>
      <MenuItem text="Sermons" href="/sermons.html" />
      <MenuItem text="Resources" href="/resources.html" />
      <MenuItem text="Contact Us" href="/contact-us.html" />
    </Menu>
  )

  return (
    <div className={styles.container}>
      <div className={styles.logoRow}>
        <div className={styles.navButton}>
          <Popover2 content={fullMenu} position={Position.BOTTOM_RIGHT}>
            <Button icon="menu" text="Menu" />
          </Popover2>
        </div>
      </div>
      <div className={styles.navRow}>
        <Popover2
          content={aboutUsMenu}
          position={Position.BOTTOM_LEFT}
          modifiers={{ arrow: { enabled: false } }}
          usePortal={false}
        >
          <a>About</a>
        </Popover2>
        <a href="/sermons.html">Sermons</a>
        <a href="/resources.html">Resources</a>
        <a href="/contact-us.html">Contact Us</a>
      </div>
    </div>
  )
}

export default HeaderNav
