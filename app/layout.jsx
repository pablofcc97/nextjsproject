import Navbar from "../components/Navbar"
import {Roboto} from 'next/font/google'

export const metadata = {
    title: 'Mi tienda con Next.js - homepage',
    description: 'Esta es la página principal de mi tienda',
    keywords: "tienda ecommerce, online, nextjs"
}

const roboto = Roboto({
    weight: ["300", "400", "500"],
    styles: ["italic", "normal"],
    subsets: ["latin"]
})

export default function RootLayout({ children}){
    return (
        <html lang="es">
            <body className={roboto.className}>
                <Navbar></Navbar>
                {children}
            </body>
        </html>
    )
}