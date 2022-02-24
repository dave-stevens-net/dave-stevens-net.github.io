import * as React from 'react'
import * as ReactDOM from 'react-dom'
import LayoutProps from '../layouts/layout-props'

export function init(
  Page: React.FC<LayoutProps>,
  target: string,
  assetsRoot: string
): void {
  const RootComponent: JSX.Element = <Page assetsRoot={assetsRoot} />
  ReactDOM.render(RootComponent, document.getElementById(target))
}
