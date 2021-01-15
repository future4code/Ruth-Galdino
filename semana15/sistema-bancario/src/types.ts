export type Transaction = {
    value: number,
    date: Date,
    description: string

}
export type account = {
    name: string,
    CPF: string,
    dateofbirth: Date,
    balance: number,
    statement: Array<Transaction>
}