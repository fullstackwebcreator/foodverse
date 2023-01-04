import "../styles/globals.css"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"
import { createTheme, NextUIProvider } from "@nextui-org/react"
import NextNProgress from "nextjs-progressbar"
import themeConfig from "../theme.config"

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const theme = createTheme(themeConfig)
  return (
    <SessionProvider session={session} refetchInterval={0}>
      <NextUIProvider theme={theme}>
        <NextNProgress color="#5B68E4" options={{ showSpinner: false }} />
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  )
}

export default MyApp
