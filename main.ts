import { CategoriaQuartos } from "./categoria";
import { Funcionario } from "./funcionario";
import { Hospede } from "./hospede";
import { Hotel } from "./hotel";
import { Pagamento } from "./pagamento";
import { Quarto } from "./quarto";
import { Reserva } from "./reserva";
import { Servico } from "./servico";

const hotel = new Hotel("Hotel Maravilha", "Rua Exemplo, 123", "1234-5678")

const categoriaLuxo  = new CategoriaQuartos("Luxo", "Quarto com vista para o mar", 50)

const quarto1 = new Quarto("101", "Duplo", 200, true, categoriaLuxo, "Quarto com cama de casal e vista.")
hotel.adquarto(quarto1)

const funcionario = new Funcionario("Carlos Silva", "12345678901", "Recepcionista", "9876-5432", "carlos@hotel.com")
hotel.adfuncionario(funcionario)

const hospede = new Hospede("João Souza", "98765432100", "joao@example.com", "9999-8888")
hotel.adhospede(hospede)

const reserva = new Reserva("2024-12-01", "2024-12-10", 2000, true, quarto1, hospede, funcionario)
hotel.adreserva(reserva)

const servico = new Servico("Café da manhã", "Serviço de café da manhã no quarto", 30, "Alimentação", funcionario)
hotel.adservico(servico)
reserva.adservico(servico)

const pagamento = new Pagamento(2000, "Cartão de Crédito", "pendente", "", reserva)
reserva.adpagamento(pagamento)

console.log("Hotel:", hotel.exibirHotel())
console.log("Reserva criada:", reserva.exibirReserva())
console.log("Pagamento:", pagamento.exibirPagamento())