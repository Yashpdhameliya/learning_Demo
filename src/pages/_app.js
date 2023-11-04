import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

import { SiteLayout } from '../../src/components/layout'

import { defaultSEO } from '../../next-seo.config'
import { theme } from '../../src/assets/styles/theme'
import '../../src/assets/styles/global.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout || ((page) => <SiteLayout>{page}</SiteLayout>)

  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }

  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...defaultSEO} />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}
