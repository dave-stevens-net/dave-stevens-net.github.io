import { css } from '@linaria/core'
import { globalConstants } from '../common/global-constants'

/*
 * full = 100%
 * wide = full size of reading area with rounded corners
 * half = 50% of reading area with rounded corners
 */

const containerBase = {
  display: 'flex !important',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundSize: 'cover !important',
  backgroundPosition: 'center !important',
}

const imageBase = {
  objectFit: 'cover',
  width: '100%',
  height: '100%',
}

export const styles = {
  containerFull: css`
    ${containerBase};
    width: 100%;
    img {
      ${imageBase};
    }
  `,
  containerPadding: css`
    display: flex;
    padding: 0 16px;
  `,
  containerWide: css`
    ${containerBase};
    max-width: ${globalConstants.textMaxWidth};
    border-radius: 4px;
    img {
      ${imageBase};
    }
  `,

  containerHalf: css`
    ${containerBase};
    width: calc(${globalConstants.textMaxWidth} / 2);
    border-radius: 4px;
    img {
      ${imageBase};
    }
  `,
}
