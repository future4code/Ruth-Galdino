import { connection } from '..'


export default async function insertRecipe(recipe: Recipes) {

    await connection.insert({
        id: recipe.id,
        title: recipe.title,
        description: recipe.description,
        createAt: recipe.createAt,
        user_id: recipe.user_id
    
    }).into('Recipes_Cookenu')


}
    
