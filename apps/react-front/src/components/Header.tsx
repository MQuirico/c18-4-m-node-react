import { LinkMenu } from "@c18-04-m-node-react/front-components";
import { useContext } from "react";
import { Context } from '../context/Context'

const Header = () => {

    const {setMenuApp} = useContext(Context);

    return (
        <header className="flex items-center justify-between p-4 bg-black text-yellow-500 h-[10vh]">
            <div className="flex items-center">
                <img src="/src/images_Home/logo_legal_builder.svg" alt="Legal Builder Logo" className="h-10 w-10" />
                <h1 className="ml-4 text-2xl">Legal Builder</h1>
            </div>
            <div className="flex space-x-4">
                <LinkMenu onClick={() => setMenuApp(1)}>Login</LinkMenu>
                <LinkMenu onClick={() => setMenuApp(2)}>Register</LinkMenu>
            </div>
        </header>
    );
};

export default Header;