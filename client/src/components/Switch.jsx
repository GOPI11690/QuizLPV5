import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

function Switch(){
    const {darkMode,toggleDarkMode}=useContext(DarkModeContext);

    const handleClick=()=>{
        toggleDarkMode(!darkMode);
    }
    return (<div>
        <img src={darkMode?'../images/lightswitch-off.png':'../images/lightswitch-on.png'} alt="LightSwitch" onClick={handleClick} />
    </div>)
}

export default Switch