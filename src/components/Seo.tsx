import { ReactElement } from 'react'

import opengraph from '/opengraph.jpg'

function Seo(): ReactElement {
  const description = '개발자 정승훈의 포트폴리오 사이트입니다.'

  return (
    <>
      <meta name="description" content={description} />
      {/* open graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={import.meta.env.VITE_APP_TITLE} />
      <meta property="og:description" content={description} />
      <meta
        property="og:url"
        content={import.meta.env.VITE_APP_ORIGIN + import.meta.env.BASE_URL}
      />
      <meta property="og:image" content={opengraph} />
    </>
  )
}

export default Seo
