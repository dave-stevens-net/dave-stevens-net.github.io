import { css } from '@linaria/core'
import { globalConstants } from '../common/global-constants'
import { Colors } from '@blueprintjs/core'

const maxWidth = 600

export const styles = {
  sectionLight: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 16px 36px;
    width: 100%;
  `,
  projectCard: css`
    display: flex;
    flex-direction: row;
    margin-bottom: 16px;
    max-width: ${maxWidth}px;
    width: 100%;
    h5 {
      margin: 0 0 16px;
      color: ${globalConstants.colorLinks};
      font-weight: normal;
      font-size: 18px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  `,
  projectIcon: css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    width: 32px;
    background-color: ${Colors.DARK_GRAY1};
    border-radius: 4px;
    margin-right: 16px;
    path {
      fill: ${Colors.GRAY2};
    }
  `,
  projectDatum: css`
    color: ${globalConstants.colorSubtext};
    font-size: 14px;
    margin-bottom: 8px;
    label {
      color: ${Colors.LIGHT_GRAY2};
    }
  `,
  activities: css`
    color: ${globalConstants.colorSubtext}
    font-size: 14px;
    line-height: 1.5;
    padding-left: 14px;
    margin: 0 0 16px;
  `,
  viewButton: css`
    margin-bottom: 12px;
  `,
  tagList: css`
    display: flex;
    flex-flow: wrap;
    .bp4-tag.bp4-round {
      background-color: ${Colors.DARK_GRAY2};
      margin: 4px;
    }
  `,
  dialog: css`
    display: flex;
    width: 100%;
    max-width: 50vw;
  `,
  dialogBody: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    > div {
      margin-bottom: 16px;
    }
  `,
}
