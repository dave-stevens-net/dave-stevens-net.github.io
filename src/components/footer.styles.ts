import { css } from '@linaria/core'
import { globalConstants } from '../common/global-constants'
import { Colors } from '@blueprintjs/core'

export const styles = {
  footer: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: auto;
    min-height: 300px;
    background-color: ${Colors.BLACK};
    color: ${Colors.LIGHT_GRAY5};
  `,
  address: css`
    font-size: 14px;
    margin-bottom: 8px;
    text-align: center;
    @media (max-width: ${globalConstants.bp.phoneMax}) {
      font-size: 16px;
    }
  `,
  addressPart: css`
    display: inline-block;
    @media (max-width: ${globalConstants.bp.phoneMax}) {
      display: block;
    }
  `,
  spacer: css`
    margin: 0 15px;
    display: inline-block;
    @media (max-width: ${globalConstants.bp.phoneMax}) {
      display: none;
    }
  `,
  contactLink: css`
    display: inline;
    a {
      color: ${Colors.GREEN4};
      text-decoration: none;
      &:hover {
        color: ${Colors.GREEN5};
      }
    }
  `,
  footerText: css`
    font-size: 12px;
    text-align: center;
    @media (max-width: ${globalConstants.bp.phoneMax}) {
      font-size: 14px;
      padding: 0 16px;
    }
  `,
}
