import * as React from 'react'
import { styles } from './nav-bar.styles'
import { Button, Classes, Drawer, Navbar, NavbarGroup } from '@blueprintjs/core'

const scrollOptions: ScrollIntoViewOptions = {
  behavior: 'smooth',
}

const NavBar: React.FC<{
  sections: {
    top: React.RefObject<HTMLDivElement>
    whatIDo: React.RefObject<HTMLDivElement>
    skills: React.RefObject<HTMLDivElement>
    projects: React.RefObject<HTMLDivElement>
    aboutMe: React.RefObject<HTMLDivElement>
  }
}> = ({ sections }) => {
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false)
  const [navTarget, setNavTarget] = React.useState<string>(undefined)

  const openMenu = () => {
    setDrawerOpen(true)
  }

  const closeMenu = () => {
    setDrawerOpen(false)
  }

  const navigateTo = (section: string) => {
    setNavTarget(section)
    closeMenu()
  }

  const onNavClosed = () => {
    if (navTarget) {
      switch (navTarget) {
        case 'whatIDo':
          sections.whatIDo.current.scrollIntoView(scrollOptions)
          break
        case 'skills':
          sections.skills.current.scrollIntoView(scrollOptions)
          break
        case 'projects':
          sections.projects.current.scrollIntoView(scrollOptions)
          break
        case 'aboutMe':
          sections.aboutMe.current.scrollIntoView(scrollOptions)
          break
        default:
          sections.top.current.scrollIntoView(scrollOptions)
      }
      setNavTarget(undefined)
    }
  }

  return (
    <Navbar fixedToTop={true} className={styles.navbar}>
      <NavbarGroup align="right">
        <Button
          icon="menu"
          minimal={true}
          onClick={openMenu}
          className={styles.button}
        />
        <Drawer
          isOpen={drawerOpen}
          size={300}
          className="bp4-dark"
          onClose={closeMenu}
          onClosed={onNavClosed}
          canOutsideClickClose={true}
          canEscapeKeyClose={true}
        >
          <div className={`${styles.drawerBody} ${Classes.DRAWER_BODY}`}>
            <a className={styles.closeLink}>
              <Button
                icon="cross"
                className={styles.button}
                minimal={true}
                onClick={closeMenu}
              />
            </a>
            <a className={styles.menuLink} onClick={() => navigateTo('top')}>
              Top
            </a>
            <a
              className={styles.menuLink}
              onClick={() => navigateTo('whatIDo')}
            >
              What I Do
            </a>
            <a className={styles.menuLink} onClick={() => navigateTo('skills')}>
              Skills
            </a>
            <a
              className={styles.menuLink}
              onClick={() => navigateTo('projects')}
            >
              Projects
            </a>
            <a
              className={styles.menuLink}
              onClick={() => navigateTo('aboutMe')}
            >
              About Me
            </a>
          </div>
        </Drawer>
      </NavbarGroup>
    </Navbar>
  )
}

export default NavBar
