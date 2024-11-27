import { Pagamento } from "./pagamento";
import { Reserva } from "./reserva";

export class Hospede{
    nome: string
    cpf: string
    telefone: string
    email: string
    reserva: Reserva[]
    pagamento: Pagamento[]
    constructor(nome: string, cpf: string, telefone: string, email: string){
        this.nome = nome
        this.cpf = cpf
        this.telefone = telefone
        this.email = email
        this.reserva = []
        this.pagamento = []
    }
    adreseva(reserva:Reserva){
        this.reserva.push(reserva)
    }
    adpagamento(pagamento:Pagamento){
        this.pagamento.push(pagamento)
    }
}
