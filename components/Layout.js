import { Nav } from "./Nav"



export const Layout = ( {children} ) =>{
    return(
    <div>
        <Nav />
        <main>
            {children}
        </main>
    </div>
    )
}