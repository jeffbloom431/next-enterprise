import "../styles/global.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className='scroll-smooth'>
        <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="assets/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="assets/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="assets/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  )
}
