import Users from "@/components/Users"

export const metadata={
    title: "mi pagina especial de backend"
}

export default function Homepage (){
    //SERVER COMPONENT
    return(  
        <section>
            {/*CLIENT COMPONENT */}
            <Users/>
        </section>
    ) 
}