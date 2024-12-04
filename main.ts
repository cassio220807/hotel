import PromptSync from "prompt-sync" 
const prompt = PromptSync()

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
const categoriaCasal = new CategoriaQuartos("casal", "Quarto de casal", 30)
const categoriaSolteiro = new CategoriaQuartos("Solteiro", "Quarto de solteiro", 20)

const teste = new Quarto("101", "Duplo", 200, true, categoriaLuxo, "Quarto com cama de casal e vista.")

const quarto1 = new Quarto("101", "Duplo", 200, true, categoriaLuxo, "Quarto com cama de casal e vista.")
const quarto2 = new Quarto("102", "um", 120, true, categoriaSolteiro, "Quarto com uma camas")
const quarto3 = new Quarto("103", "casal", 130, true, categoriaCasal, "Quarto com cama de casal")
hotel.adquarto(quarto1)
hotel.adquarto(quarto2)
hotel.adquarto(quarto3)

const funcionario2 = new Funcionario("mateus", "32145687653", "Café", "7216-5432", "mateus@hotel.com")
const funcionario = new Funcionario("Carlos Silva", "12345678901", "Recepcionista", "9876-5432", "carlos@hotel.com")
hotel.adfuncionario(funcionario)
hotel.adfuncionario(funcionario2)

const hospede2 = new Hospede("Arthur", "84893986475", "0909-0909", "arthur@gmail.com")
const hospede = new Hospede("João Souza", "98765432100", "9999-8888", "joao@gmail.com")
hotel.adhospede(hospede)
hotel.adhospede(hospede2)

const reserva = new Reserva("2024-12-01", "2024-12-10", 2000, true, teste, hospede, funcionario)
hotel.adreserva(reserva)

const servico = new Servico("Café da manhã", "Serviço de café da manhã no quarto", 30, "Alimentação", funcionario2)
hotel.adservico(servico)
reserva.adservico(servico)

const pagamento = new Pagamento(2000, "Cartão de Crédito", "pendente", "", reserva)
reserva.adpagamento(pagamento)

// console.log("Hotel:", hotel.exibirHotel())
// console.log("Reserva criada:", reserva.exibirReserva())
// console.log("Pagamento:", pagamento.exibirPagamento())

function promptt(){
  console.log("================= Cadastro =================")
  let nome = prompt("nome: ")
  let CPF = prompt("CPF: ")
  let telefone = prompt("Numero de telefone: ")
  let email = prompt("email: ")
  const hospede = new Hospede(nome, CPF, telefone, email)
  hotel.adhospede(hospede)

  console.log("================= Reserva =================")
  let dias = Number(prompt("Dias de estadia: "))
  let check_in = prompt("Check-in: ")
  let check_out = prompt("Check-out: ")

  console.log("================= Escolha um Quarto =================")
  console.log("Quarto", quarto1.exbirinfo())
  console.log("Quarto", quarto2.exbirinfo())
  console.log("Quarto", quarto3.exbirinfo())
  let quarto = Number(prompt("1- quarto luxo, 2-quarto casal, 3-quarto solteiro: "))

  //============================== Repeição =====================================
  let valor: any
  let reserva: any
  do{
   switch (quarto){
    case 1:
      valor = quarto1.precobase * dias
      console.log(`Valor a pagar R$${valor.toFixed(2)}`)
      break;
    case 2:
      valor = quarto2.precobase * dias
      console.log(`Valor a pagar R$${valor.toFixed(2)}`)
      break;
    case 3:
      valor = quarto3.precobase * dias
      console.log(`Valor a pagar R$${valor.toFixed(2)}`)
      break;
    default:
      console.log("Quarto imvalido")
      quarto = Number(prompt("1- quarto luxo, 2-quarto casal, 3-quarto solteiro: "))
   }
  }while(quarto >= 4 || quarto <= 1)
   switch (quarto){
    case 0:
      break
    case 1:
      reserva = new Reserva(check_in, check_out, valor, true, quarto1, hospede, funcionario)
      break;
    case 2:
      reserva = new Reserva(check_in, check_out, valor, true, quarto3, hospede, funcionario)
      break;
    case 3:
      reserva = new Reserva(check_in, check_out, valor, true, quarto3, hospede, funcionario)
      break;
    default:
      console.log("Quarto imvalido")
   }
   hotel.adreserva(reserva)

   console.log("================= Pagamento =================")
   let formapagamento = prompt("forma de pagamento: ")
   let pagamento = new Pagamento(valor, formapagamento, "efetuado","", reserva)
   reserva.adpagamento(pagamento)
   console.log("Pagamento efetuado com sucesso")

   console.log("Hotel", hotel.exibirHotel())
}
promptt()