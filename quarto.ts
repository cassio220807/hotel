import { Reserva } from "./reserva";
import { CategoriaQuartos } from "./categoria";


export class Quarto{
    numero: string
    tipo: string
    precobase: number
    disponivel: boolean
    categoriaquato: CategoriaQuartos
    descricao: string
    reservas: Reserva[]
    constructor(numero:string, tipo:string, precobase:number, disponivel:boolean, categoriaquarto:CategoriaQuartos, descricao:string){
        this.numero = numero
        this.tipo = tipo
        this.precobase = precobase
        this.disponivel = disponivel
        this.categoriaquato = categoriaquarto
        this.descricao = descricao
        this.reservas = []
    }
    adreserva(reserva:Reserva){
        this.reservas.push(reserva)
    }
}