import React from "react";
import { useHistory } from "react-router-dom";


const Cadastrar = () => {
    const history = useHistory()

    const goToHome = () => {
        history.push("/")
    }

    return(
        <div>
            <p>Cadastrar</p>
            
        <button onClick={goToHome}>goToHome</button>
        </div>
    )
}

export default Cadastrar;