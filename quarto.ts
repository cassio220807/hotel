import { Reserva } from "./reserva";
import { CategoriaQuartos } from "./categoria";


export class Quarto{
    numero: string
    tipo: string
    precoBase: number
    disponivel: boolean
    CategoriaQuartos: CategoriaQuartos
    descricao: string
    reservas: Reserva[]
    constructor(numero:string, tipo:string, precoBase:number, disponivel:boolean, categoriaquarto:CategoriaQuartos, descricao:string){
        this.numero = numero
        this.tipo = tipo
        this.precoBase = precoBase
        this.disponivel = disponivel
        this.CategoriaQuartos = categoriaquarto
        this.descricao = descricao
        this.reservas = []
    }
    exibirInfo():string{
        return `
        Numero: ${this.numero}
        Tipo: ${this.tipo}
        Preço Base: ${this.precoBase}
        Disponibilidade: ${this.disponivel}
        Categoria Quarto: ${this.CategoriaQuartos.nome}
        Descrição: ${this.descricao}
        `
    }
    adreserva(reserva:Reserva){
        this.reservas.push(reserva)
    }
}