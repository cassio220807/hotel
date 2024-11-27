import { Reserva } from "./reserva"

export class Pagamento{
    valor:number
    metodopagamneto:string
    status:string
    datapagameto: Date|string
    reserva:Reserva
    constructor(valor:number, metodopagamneto:string,satatus:string,datapagamento:Date|string, reserva:Reserva){
        this.valor = valor
        this.metodopagamneto = metodopagamneto
        this.status = satatus
        this.datapagameto = datapagamento
        this.reserva = reserva
    }
    toString(): string {
        return `
            Pagamento de R$ ${this.valor} 
            Método: ${this.metodopagamneto}
            Status: ${this.status}
            Data do Pagamento: ${this.datapagameto || "Pendente"}
        `;
    }
    exibirPagamento(): string {
        return `
            Pagamento de R$${this.valor.toFixed()} para a Reserva de ${this.reserva.hospede.nome}
            Método de Pagamento: ${this.metodopagamneto}
            Status: ${this.status}
            Data do Pagamento: ${this.datapagameto || "Pendente"}
            =====================================================
            Reserva Associada: ${this.reserva.exibirReserva()}
        `;
    }
}