import { css } from '@linaria/core'
import { globalConstants } from '../common/global-constants'
import { lighten } from 'polished'

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `,
  logoRow: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
    width: 100%;
  `,
  /*
  navRow: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 100%;
    @media (max-width: ${globalConstants.bp.phoneMax}) {
      height: 8px;
    }
    a {
      color: ${theme.colors.primaryText};
      padding: 0 16px;
      height: 40px;
      display: flex;
      align-items: center;
      font-size: 16px;
      font-weight: ${theme.fonts.weightDefault};
      text-decoration: none;
      &:hover {
        text-decoration: none;
        color: ${theme.colors.primaryText};
        background-color: ${lighten(0.1, theme.colors.primary)};
      }
      @media (max-width: ${globalConstants.bp.phoneMax}) {
        display: none;
      }
    }
    ul {
      background: ${theme.colors.primary};
      color: ${theme.colors.primaryText};
    }
  `,
  navButton: css`
    display: none;
    position: absolute;
    right: 16px;
    top: 16px;
    @media (max-width: ${globalConstants.bp.phoneMax}) {
      display: flex;
    }
  `,
  phoneMenu: css`
    font-size: 14px; // fix this
    //font-size: $pt-font-size;
  `,

   */
}
