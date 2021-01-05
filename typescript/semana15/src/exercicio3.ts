/***** LETRA A ****/

type post = {
    autor: string,
    texto: string
}

const listaPosts: post [] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  /***** LETRA B *****/

function buscarPostsPorAutor(posts: Array<post>, autorInformado: string) {
    return posts.filter(
        (post: {}) => {
            return post[0].autor === autorInformado
        }
    )
}

console.log(buscarPostsPorAutor, "Dobby")
