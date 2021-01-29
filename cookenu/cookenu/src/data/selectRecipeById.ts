import { connection } from ".."

export default async function selectRecipeById (
    id: string
): Promise<any> {
    
    const result = await connection.raw(`

        SELECCT * FROM Cookenu_Recipes
        WHERE id = '${id}';
    `)

    return result[0][0]
}
