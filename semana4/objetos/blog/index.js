const criar = () => {
    let tituloPost = document.getElementById("titulo-post")
    let autorPost = document.getElementById("autor-post")
    let conteudoPost = document.getElementById("conteudo-post")


    const post = {
       titulo: tituloPost.value,
       autor: autorPost.value,
       conteudo: conteudoPost.value
       
    }
    
    const array = []
    array.push(post)
    console.log(array)

    let conteinerDePosts = document.getElementById("container-de-posts")
        conteinerDePosts.innerHTML += `<p> ${tituloPost.value} </p>`
        conteinerDePosts.innerHTML += `<p> ${autorPost.value} </p>`
        conteinerDePosts.innerHTML += `<p> ${conteudoPost.value} </p>`


        tituloPost.value=""
        autorPost.value=""
        conteudoPost.value=""
      
}

