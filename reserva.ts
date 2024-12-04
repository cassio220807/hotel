import { Funcionario } from "./funcionario";
import { Hospede } from "./hospede";
import { Pagamento } from "./pagamento";
import { Quarto } from "./quarto";
import { Servico } from "./servico";

export class Reserva{
    dataentrada: Date|string
    datasaida: Date|string
    precototal: number
    status: boolean
    quarto: Quarto
    hospede: Hospede
    servicos: Servico[]
    pagamento: Pagamento
    funcionarioresponsavel: Funcionario
    constructor(dataentrada:Date|string, datasaida:Date|string, precototal:number, status: boolean, quarto: Quarto, hospede:Hospede, funcionarioresponsavel:Funcionario){
        this.dataentrada = dataentrada
        this.datasaida = datasaida
        this.precototal = precototal
        this.status = status
        this.quarto = quarto
        this.hospede = hospede
        this.servicos = []
        this.pagamento = new Pagamento(0, "", "pendente", "", this);
        this.funcionarioresponsavel = funcionarioresponsavel
    }
    adservico (servico:Servico){
        this.servicos.push(servico)
    }
    adPagamento (pagamento:Pagamento){
        this.pagamento = pagamento
    }
    calcularpagamento(dias:number):number{
        let n1 = dias * this.precototal
        return n1
    }
    exibirReserva(): string {
        return `
            Reserva de ${this.hospede.nome} (${this.hospede.cpf})
            Quarto: ${this.quarto.numero} - ${this.quarto.descricao}
            Tipo de Quarto: ${this.quarto.tipo}
            Data de Entrada: ${this.dataentrada}
            Data de Saída: ${this.datasaida}
            Valor Total: R$ ${this.precototal}
            Status: ${this.status ? "Confirmada" : "Pendente"}
            Funcionario Responsável: ${this.funcionarioresponsavel.nome}
            Serviços Incluídos: ${this.servicos.length > 0 ? this.servicos.map(s => s.nome).join(', ') : "Nenhum"}
            =====================================================
            Pagamento: ${this.pagamento ? this.pagamento.toString() : "Não realizado"}
        `;
    }
}