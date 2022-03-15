import { css } from '@linaria/core'
import { globalConstants } from '../common/global-constants'
import { Colors } from '@blueprintjs/core'

export const styles = {
  sectionDark: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 16px 36px;
    width: 100%;
    background-color: ${Colors.BLACK};
    h2 {
      margin-bottom: 40px;
    }
  `,
  row: css`
    display: flex;
    width: 100%;
    max-width: 600px;
    @media (max-width: ${globalConstants.bp.phoneMax}) {
      flex-direction: column;
    }
  `,
  colAvatar: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      font-family: ${globalConstants.titleFontFamily};
      font-weight: ${globalConstants.titleFontWeight};
      white-space: nowrap;
      font-size: 24px;
    }
    @media (min-width: ${globalConstants.bp.tabletMin}) {
      margin-right: 40px;
    }
  `,
  avatar: css`
    width: 120px;
    height: 120px;
    border-radius: 4px;
  `,
  colHistory: css`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 1.5;
    p {
      color: ${globalConstants.colorSubtext};
    }
  `,
}
