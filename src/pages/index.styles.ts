import { css } from '@linaria/core'
import { globalConstants } from '../common/global-constants'
import { Colors } from '@blueprintjs/core'

export const globals = css`
  :global() {
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;600&display=swap}');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;600&display=swap');
    body {
      display: flex;
      flex-direction: column;
      margin: 0;
      font-family: 'Ubuntu', 'Helvetica', sans-serif;
      font-size: 16px;
      min-height: 100vh;
      background-color: ${Colors.DARK_GRAY1};
      color: ${Colors.LIGHT_GRAY5};
      @media (max-width: ${globalConstants.bp.phoneMax}) {
        font-size: calc(18px);
      }
    }
  }
`

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
  `,
  topSection: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 500px;
    background-color: ${Colors.BLACK};
    font-family: 'Montserrat', sans-serif;
    font-weight: 200;
    padding: 0 16px;
    h1 {
      font-weight: 600;
      color: ${Colors.GREEN5};
      font-size: 49px;
      margin: 0;
      @media (max-width: ${globalConstants.bp.phoneMax}) {
        font-size: 48px;
      }
    }
    h2 {
      font-weight: 200;
      text-transform: uppercase;
      margin: 0 0 16px;
      @media (max-width: ${globalConstants.bp.phoneMax}) {
        font-size: 24px;
      }
    }
    p {
      max-width: 333px;
      line-height: 1.5;
      font-size: 15px;
    }
  `,
  sectionLight: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 16px 36px;
    width: 100%;
  `,
  sectionDark: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 16px 36px;
    width: 100%;
    background-color: ${Colors.BLACK};
  `,
  cardRow: css`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    @media (max-width: ${globalConstants.bp.phoneMax}) {
      flex-direction: column;
    }
  `,
  card: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Colors.GREEN5};
    color: ${Colors.BLACK};
    border-radius: 4px;
    min-height: 350px;
    max-width: 200px;
    padding: 40px 16px 16px;
    width: 100%;
    margin: 8px;
    text-align: center;
    h3 {
      display: flex;
      align-items: center;
      height: 50px;
    }
    p {
      font-size: 14px;
    }
  `,
}
