import { Quarto } from "./quarto"
import { Servico } from "./servico"
import { Reserva } from "./reserva"
import { Hospede } from "./hospede"
import { Funcionario } from "./funcionario"

export class Hotel{
    nome:string
    endereco:string
    telefone:string   
    quarto: Quarto[]
    servico: Servico[]
    reserva: Reserva[]
    hospede: Hospede[]
    funcionario: Funcionario[]
    constructor(nome:string, endereco:string, telefone:string){
        this.nome = nome
        this.endereco = endereco
        this.telefone = telefone
        this.quarto = []
        this.servico = []
        this.reserva = []
        this.hospede = []
        this.funcionario = []
    }
    adQuarto(quarto:Quarto){
        this.quarto.push(quarto)
    }
    adservico (servico:Servico){
        this.servico.push(servico)
    }
    adReserva(reserva:Reserva){
        this.reserva.push(reserva)
    }
    adHospede(hospede:Hospede){
        this.hospede.push(hospede)
    }
    adFuncionario(funcionario:Funcionario){
        this.funcionario.push(funcionario)
    }
    exibirHotel(): string {
        return `
            Hotel: ${this.nome} 
            Endereço: ${this.endereco} 
            Telefone: ${this.telefone}
            - Número de Quartos: ${this.quarto.length}
            - Número de Serviços: ${this.servico.length}
            - Número de Reservas: ${this.reserva.length}
            - Número de Hóspedes: ${this.hospede.length}
            - Número de Funcionários: ${this.funcionario.length}
        `;
    }
}