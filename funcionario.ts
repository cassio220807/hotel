import { Reserva } from "./reserva"
import { Servico } from "./servico"

export class Funcionario{
    nome:string
    cpf:string
    cargo:string
    telefone:string
    email:string
    servisosprestados: Servico[]
    reservasprestadas: Reserva[]
    constructor(nome:string, cpf:string, cargo:string, telefone:string, email:string){
        this.nome = nome
        this.cpf = cpf
        this.cargo = cargo
        this.telefone = telefone
        this.email = email
        this.servisosprestados = []
        this.reservasprestadas = []
    }
    adserviso(servico:Servico){
        this.servisosprestados.push(servico)
    }
    adreserva(reserva:Reserva){
        this.reservasprestadas.push(reserva)
    }
}