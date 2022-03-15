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
  `,
  row: css`
    display: flex;
  `,
  colAvatar: css`
    display: flex;
  `,
  avatar: css`
    width: 120px;
    height: 120px;
    border-radius: 4px;
  `,
  colHistory: css`
    display: flex;
  `,
}
