import React from 'react';
import styled from 'styled-components';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts:[{
      nomeUsuario: "petraLais.",
      fotoUsuario: "https://picsum.photos/50/50",
      fotoPost: "https://picsum.photos/200/150"
    },
    {
      nomeUsuario: "Caiotas",
      fotoUsuario: "https://picsum.photos/50/51",
      fotoPost: "https://picsum.photos/200/151"
    },
    {
      nomeUsuario: "severoPedro",
      fotoUsuario: "https://picsum.photos/50/52",
      fotoPost: "https://picsum.photos/200/152"
  
    }],

    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""

  };

  adicionarPost = () =>{
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost, 
    };

   /* const novosPosts = [...this.state.arrayDePosts, novoPost];
    this.setState({arrayDePosts: novosPosts});*/
    
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState({valorInputNomeUsuario: event.target.value});

  };

  onChangeFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value});
  };

  onChangeFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value});
  };




  render() {
    const details = this.state.posts.map((post) => {
      return (
        <Post
        nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}   
          /> 


      );
    });

    return (
      <div className={'app-container'}>
        <div>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={"Nome de usuário"}
        />

        <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeFotoUsuario}
            placeholder={"Coloque sua foto"}
              
          />

          <input
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeFotoPost}
              placeholder={"Postar foto"}
          />
          <button onClick={this.adicionarPost}>Postar</button>

      
        </div>
        
      <div>{details}</div>
     </div> 
        
    
          );
          
        
        
        }
      }
        
        export default App;
        
        