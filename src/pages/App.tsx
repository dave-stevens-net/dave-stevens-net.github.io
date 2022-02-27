import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { PageProps } from '../common/page-props'

export function init(
  Page: React.FC<PageProps>,
  target: string,
  assetsRoot: string
): void {
  const RootComponent: JSX.Element = <Page assetsRoot={assetsRoot} />
  ReactDOM.render(RootComponent, document.getElementById(target))
}
