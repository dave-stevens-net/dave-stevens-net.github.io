import * as React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { styles } from './lazy-image.styles'

const LazyImage: React.FC<{
  src: string
  ht: string
  width: 'full' | 'wide' | 'half'
}> = ({ src, ht, width }) => {
  const containerClass =
    width === 'half'
      ? styles.containerHalf
      : width === 'wide'
      ? styles.containerWide
      : styles.containerFull
  const placeholder = src
    .replace('.jpg', '-placeholder.jpg')
    .replace('.jpeg', '-placeholder.jpeg')
    .replace('.png', '-placeholder.png')
  const image = (
    <LazyLoadImage
      src={src}
      placeholderSrc={placeholder}
      effect="blur"
      threshold={100}
      height={ht}
      wrapperClassName={containerClass}
    />
  )
  return (
    <>
      {width === 'full' ? (
        image
      ) : (
        <div className={styles.containerPadding}>{image}</div>
      )}
    </>
  )
}

export default LazyImage
