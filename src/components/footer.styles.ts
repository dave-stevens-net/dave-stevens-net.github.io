import { css } from '@linaria/core'
import { globalConstants } from '../common/global-constants'
import { Colors } from '@blueprintjs/core'

export const styles = {
  footer: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: auto;
    padding-bottom: 60px;
    background-color: ${Colors.BLACK};
    color: ${Colors.LIGHT_GRAY5};
    hr {
      margin: 0 16px 60px;
      border: none;
      border-bottom: 1px solid ${Colors.DARK_GRAY1};
    }
  `,
  row: css`
    display: flex;
    justify-content: center;
    width: 100%;
    @media (max-width: ${globalConstants.bp.phoneMax}) {
      flex-direction: column;
    }
  `,
  col: css`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 20px;
    h4 {
      margin: 4px 0;
    }
  `,
  name: css`
    display: flex;
    color: ${Colors.GREEN5};
    font-size: 27px;
    font-family: ${globalConstants.titleFontFamily};
    font-weight: ${globalConstants.titleFontWeight};
  `,
  title: css`
    display: flex;
    font-family: ${globalConstants.titleFontFamily};
    font-weight: ${globalConstants.subTitleFontWeight};
    margin-bottom: 20px;
  `,
  contactLink: css`
    display: inline;
    margin: 4px 0;
  `,
  profileLink: css`
    color: ${globalConstants.colorLinks};
    margin: 4px 0;
    svg {
      height: 32px;
      path {
        fill: ${globalConstants.colorLinks};
      }
    }
    svg:hover {
      path {
        fill: ${globalConstants.colorLinksHover};
      }
    }
    @media (max-width: ${globalConstants.bp.phoneMax}) {
      position: absolute;
      top: -38px;
      right: 0;
    }
  `,
}
