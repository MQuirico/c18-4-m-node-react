import { Button } from "@c18-04-m-node-react/front-components"
import { useContext } from "react"
import Context from "../../context/Context"
import CasesPanel from "../casesPanel/CasesPanel";
import NewCasePanel from "../newCasePanel/NewCasePanel";
import TeamPanel from "../teamPanel/TeamPanel";

function UserPanel() {

  const {setOnUser, panelMenu} = useContext(Context);
  return (
    <div className="flex flex-col items-center text-center flex-grow w-full h-[80vh] justify-center">
        {panelMenu === 0 && <CasesPanel></CasesPanel>}
        {panelMenu === 1 && <NewCasePanel></NewCasePanel>}
        {panelMenu === 2 && <TeamPanel></TeamPanel>}
    </div>
  )
}

export default UserPanel