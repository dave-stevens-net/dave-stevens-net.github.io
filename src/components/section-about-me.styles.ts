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
  workExperience: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${globalConstants.colorSubtext};
    background-color: ${Colors.DARK_GRAY1};
  `,
  employer: css`
    display: flex;
    border-top: 1px solid ${globalConstants.colorBorder};
    border-right: 1px solid ${globalConstants.colorBorder};
    border-left: 1px solid ${globalConstants.colorBorder};
    &:last-child {
      border-bottom: 1px solid ${globalConstants.colorBorder};
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  `,
  empCol1: css`
    display: flex;
    justify-content: center;
    padding: 16px;
  `,
  empCol2: css`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 8px 8px 8px 0;
  `,
  employerName: css`
    a {
      font-size: 18px;
    }
  `,
}
