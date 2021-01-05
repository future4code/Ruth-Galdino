console.log("Hello world!")


/******* LETRA A *******/
//É emitido um erro de sintaxe


/******* LETRA B *******/

//let number : (number | string)[] = [18, "Ruth"];


/******* LETRA C *******/
const person: { name: string, age: number, favoriteColor: string } = {
        name: "Ruth",
        age: 18,
        favoriteColor: "blue" 
    
}


/******* LETRA D e E *******/

enum coresArcoiris {
    GREEN = "green",
    BLACK = "black",
    BLUE = "blue",
    PINK = "pink",
    PURPLE = "purple"
}

type person = {name: string, age: number, favoriteColor: coresArcoiris}

const studantA: person = {
    name: "Diego",
    age: 23,
    favoriteColor: coresArcoiris.BLUE
}

const studantB: person = {
    name: "Matheus",
    age: 22,
    favoriteColor: coresArcoiris.BLACK
}

const studantC: person = {
    name: "Ruth",
    age: 18,
    favoriteColor: coresArcoiris.PURPLE
}