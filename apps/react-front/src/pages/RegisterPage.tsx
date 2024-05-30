import { ReactElement } from "react";
import Register from "../components/Register/Register";
import Header from "../components/Header2/Header";

export default function RegisterPage(): ReactElement {
    return(
        <>
            
            {/* este header es para mostrar algo en la pagina de registro, puede ser borrado en un futuro */}
            <Header/>
            
            <main className='bg-purple'>
                <Register />
            </main>

            {/* este footer es para mostrar algo en la pagina de registro, puede ser borrado en un futuro */}
            <footer>Este es el footer</footer>
        </>
    )
}