import React from "react";
import { useHistory } from "react-router-dom";


const Contato = () => {
    const history = useHistory()

    const goToHome = () => {
        history.push("/Home")
    }

    return(
        <div>
            <p>Contato</p>
            
        <button onClick={goToHome}>goToHome</button>
        </div>
    )
}

export default Contato;