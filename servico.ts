import { Funcionario } from "./funcionario";

export class Servico{
    nome: string
    descricao: string
    preco:number
    tipo: string
    funcionarioresponsavel: Funcionario
    constructor(nome:string, descricao:string,preco:number, tipo:string, funcionarioresponsavel:Funcionario){
        this.nome = nome
        this.preco = preco
        this.descricao = descricao
        this.tipo = tipo
        this.funcionarioresponsavel = funcionarioresponsavel
    }
}