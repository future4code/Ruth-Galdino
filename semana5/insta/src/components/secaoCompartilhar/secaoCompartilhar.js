import React, { Component } from 'react'
import './SecaoCompartilhar.css'


export class secaoCompartilhar extends Component{
    state = {
        valorInputAdicionarPost:''

    }

    onChangeAdicionarPost = (event) => {
        console.log(event.target.value)
        this.setState({valorInputAdicionarPost: event.target.value})
    }

    render (){
        return <div className={'adiciona-post'}>
            <input
             value={this.state.valorInputNomeUsuario}
             onChange={this.onChangeInputNomeUsuario}
             placeholder={"Nome de usuário"}/>





        </div>
    }
}