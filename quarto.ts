import { Reserva } from "./reserva";
import { CategoriaQuartos } from "./categoria";


export class Quarto{
    numero: string
    tipo: string
    precobase: number
    disponivel: boolean
    CategoriaQuartos: CategoriaQuartos
    descricao: string
    reservas: Reserva[]
    constructor(numero:string, tipo:string, precobase:number, disponivel:boolean, categoriaquarto:CategoriaQuartos, descricao:string){
        this.numero = numero
        this.tipo = tipo
        this.precobase = precobase
        this.disponivel = disponivel
        this.CategoriaQuartos = categoriaquarto
        this.descricao = descricao
        this.reservas = []
    }
    exbirinfo():string{
        return `
        Numero: ${this.numero}
        Tipo: ${this.tipo}
        Preço Base: ${this.precobase}
        Disponibilidade: ${this.disponivel}
        Categoria Quarto: ${this.CategoriaQuartos.nome}
        Descrição: ${this.descricao}
        `
    }
    adreserva(reserva:Reserva){
        this.reservas.push(reserva)
    }
}