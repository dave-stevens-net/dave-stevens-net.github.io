import { css } from '@linaria/core'
import { globalConstants } from '../common/global-constants'
import { Colors } from '@blueprintjs/core'

export const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  `,
  contentBody: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-family: ${globalConstants.defaultFontFamily};
      font-weight: ${globalConstants.defaultFontWeight};
      color: ${Colors.LIGHT_GRAY5};
      text-transform: uppercase;
      width: 100%;
      box-sizing: border-box;
      max-width: ${globalConstants.textMaxWidth};
      padding: 0 16px;
    }
    h1 {
      color: ${Colors.LIGHT_GRAY5};
      text-align: center;
    }
    a {
      color: ${Colors.GREEN3};
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    p,
    small {
      width: 100%;
      box-sizing: border-box;
      max-width: ${globalConstants.textMaxWidth};
      padding: 0 16px;
    }
    p {
      padding: 0 20px;
      margin: 16px 0;
      line-height: 1.5;
    }
    small {
      padding: 0 20px;
      margin: 16px 0;
      font-size: 13px;
      line-height: 1.5;
    }
    ul {
      width: 100%;
      box-sizing: border-box;
      max-width: ${globalConstants.textMaxWidth};
    }
    ul li {
      line-height: 1.5;
    }
    hr {
      border: 0;
      width: 100%;
      max-width: ${globalConstants.textMaxWidth};
      padding-left: 16px;
      padding-right: 16px;
      box-sizing: border-box;
      &:after {
        display: flex;
        content: ' ';
        height: 1px;
        width: 100%;
        background-color: ${Colors.LIGHT_GRAY1};
      }
    }
  `,
  padContentBody: css`
    padding-bottom: 20px;
  `,
}
