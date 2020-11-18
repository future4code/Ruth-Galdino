import React from "react";
import { useHistory } from "react-router-dom";


 const CriarViagem = () => {
        const history = useHistory();

        const goToHome = () => {
            history.push("/Home");
        }; 
    return(
        <div>
            <p>Crie sua viagem!</p>
            <img src="https://picsum.photos/300/300"/>
            <button>Criar viagem</button>
            <button onClick={goToHome}>Home</button>
        </div>
    )
}

export default CriarViagem;