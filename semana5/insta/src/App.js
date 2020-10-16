import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts:[{
      nomeUsuario: "petraLais",
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
  
    }]
  }
  

  render() {
    const details = this.state.posts.map((post) =>{
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}   
          /> 
      
      </div>
    
    )
        
  })

return(
  <div>
    {details}
  </div>
  );
}
}
  
export default App;

  