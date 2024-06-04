import { ItemIcon, LinkMenu } from "@c18-04-m-node-react/front-components";
import { useContext } from "react";
import { Context } from '../context/Context'

const Header = () => {

    const {setMenuApp, onUser, setPanelMenu, setOnUser} = useContext(Context);

    return (
        <header className="flex items-center justify-between p-4 bg-darkPurple text-yellow-500 h-[10vh] ml-4 mr-4">
            <div className="flex items-center">
                <img src="/src/images_Home/logo_con_palitos.svg" alt="Legal Builder Logo" className="h-1/2 w-auto" />
                <h1 className="ml-4 text-2xl text-yellow font-marce">Legal Builder</h1>
            </div>
            {onUser === false && <div className="flex space-x-4">
                <LinkMenu onClick={() => setMenuApp(0)}>Home</LinkMenu>
                <LinkMenu onClick={() => setMenuApp(1)}>Login</LinkMenu>
                <LinkMenu onClick={() => setMenuApp(2)}>Register</LinkMenu>
            </div>}
            {onUser === true && <div className="flex space-x-4 bg-lightPurple">
                <LinkMenu onClick={() => setPanelMenu(0)}>Cases</LinkMenu>
                <LinkMenu onClick={() => setPanelMenu(1)}>+ New Case</LinkMenu>
                <LinkMenu onClick={() => setPanelMenu(2)}>Team</LinkMenu>
                <ItemIcon src="user.svg"></ItemIcon>
                <LinkMenu onClick={() => {setPanelMenu(0); setOnUser(false)}}>Log out</LinkMenu>
            </div>}
        </header>
    );
};

export default Header;