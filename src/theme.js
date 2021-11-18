import { extendTheme } from "@chakra-ui/react"

const customTheme = {
  styles: {
    global: () => ({
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      "*, button, input": {
        border: 0,
        outline: 0,
      },
      "html, body, #root": {
        height: "100%",
        width: "100%",
      },
    }),
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
}

const theme = extendTheme(customTheme)

export default theme
