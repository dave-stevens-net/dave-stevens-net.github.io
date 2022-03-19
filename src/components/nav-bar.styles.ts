import { css } from '@linaria/core'
import { Colors } from '@blueprintjs/core'
import { globalConstants } from '../common/global-constants'

export const styles = {
  navbar: css`
    &.bp4-navbar {
      background-color: ${Colors.BLACK};
      box-shadow: none;
    }
  `,
  button: css`
    .bp4-icon {
      path {
        fill: ${globalConstants.colorLinks};
      }
    }
    &:focus {
      outline: none;
    }
  `,
  drawerBody: css`
    background-color: ${Colors.DARK_GRAY1};
  `,
  menuLink: css`
    display: flex;
    padding: 16px;
    border-top: 1px solid ${Colors.DARK_GRAY2};
    &:hover {
      background-color: ${Colors.BLACK};
    }
    &:last-child {
      border-bottom: 1px solid ${Colors.DARK_GRAY2};
    }
  `,
  closeLink: css`
    display: flex;
    justify-content: flex-end;
    height: 50px;
    align-items: center;
    padding: 0 15px;
  `,
}
