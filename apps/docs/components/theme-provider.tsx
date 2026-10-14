"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"

// TEMPORARY: dark mode is forced for every visitor. To restore system theme
// detection, remove `forcedTheme` and restore `defaultTheme="system"` and
// `enableSystem`.
function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      forcedTheme="dark"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      storageKey=""
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

export { ThemeProvider }
