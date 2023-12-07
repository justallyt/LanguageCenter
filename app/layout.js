import { Plus_Jakarta_Sans } from "next/font/google"
import localFont from "next/font/local"
import './globals.css'

export const plusJakarta = Plus_Jakarta_Sans({
        weight: ['600','700'],
        subsets: ['latin']
})

const satoshi = localFont({
        src: [
                 {
                        path: './fonts/Satoshi-Light.otf',
                        weight: '400',
                 },
                 {
                      path: './fonts/Satoshi-Regular.otf',
                      weight: '500'
                 },
                 {
                       path: './fonts/Satoshi-Medium.otf',
                       weight: '600'
                 }
        ]
})
export const metadata = {
        title: 'Language Center -  A leading language school in Nairobi, Kenya',
        description: 'The Language Center is a leading language school in Nairobi, Kenya. It offers a wide range of language courses for all ages and levels, including English, French, Spanish, Portuguese, Italian, Chinese and Swahili.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={satoshi.className}>      
                 <body>{children}</body>
    </html>
  )
}
