import { ReactElement } from 'react'

interface Props {
  className?: string
  image: ImagePreset
  alt: string
}

function Image(props: Props): ReactElement {
  const { className, alt } = props
  const image = props.image[props.image.length - 1]
  return (
    <img
      className={className}
      loading={image.loading}
      srcSet={image.srcset}
      src={image.src}
      alt={alt}
    />
  )
}

export default Image
