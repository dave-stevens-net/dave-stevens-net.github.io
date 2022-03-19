import { css } from '@linaria/core'
import { Colors } from '@blueprintjs/core'

const maxWidth = 600

export const styles = {
  sectionDark: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px 16px 42px;
    width: 100%;
    background-color: ${Colors.BLACK};
  `,
  skillCategory: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${maxWidth}px;
    background-color: ${Colors.DARK_GRAY1};
    border-radius: 4px;
    margin-bottom: 16px;
  `,
  skillCategoryLabel: css`
    display: flex;
    color: ${Colors.GRAY1};
    border-bottom: 1px solid ${Colors.BLACK};
    font-size: 11px;
    padding: 4px 16px;
    text-transform: uppercase;
  `,
  skill: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 16px;
    border-bottom: 1px solid ${Colors.BLACK};
    &:last-child {
      border-bottom: none;
    }
  `,
  subText: css`
    font-size: 12px;
    color: ${Colors.GRAY1};
  `,
}
