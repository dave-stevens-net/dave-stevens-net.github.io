import { css } from '@linaria/core'
import { Colors } from '@blueprintjs/core'

export const styles = {
  chartContainer: css`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    label {
      font-size: 12px;
      color: ${Colors.GRAY1};
      margin-right: 6px;
      line-height: 1;
      margin-top: 2px;
    }
  `,
  barEmpty: css`
    height: 12px;
    width: 4px;
    border-radius: 1px;
    background-color: ${Colors.BLACK};
    margin-right: 2px;
  `,
  barFull: css`
    height: 12px;
    width: 4px;
    border-radius: 1px;
    background-color: ${Colors.GREEN5};
    margin-right: 2px;
  `,
}
