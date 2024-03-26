export const metadata = {
    title: 'Mi tienda con Next.js - tienda oficial',
    description: 'Esta es la página principal de mi tienda',
    keywords: "tienda ecommerce, online, nextjs"
}

export default function tiendaLayout({children}){
    return(
        <>
        <nav>
            <h3>Seccion tienda</h3>
            <ul>
                <li>Categorias</li>
                <li>Productos</li>
            </ul>
        </nav>

        {children}
        </>
    )
}