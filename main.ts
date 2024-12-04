import PromptSync from "prompt-sync";
const prompt = PromptSync();

import { CategoriaQuartos } from "./categoria";
import { Funcionario } from "./funcionario";
import { Hospede } from "./hospede";
import { Hotel } from "./hotel";
import { Pagamento } from "./pagamento";
import { Quarto } from "./quarto";
import { Reserva } from "./reserva";
import { Servico } from "./servico";

// Instanciando objetos do sistema
const hotel = new Hotel("Hotel Maravilha", "Rua Exemplo, 123", "1234-5678");

const categoriaLuxo = new CategoriaQuartos("Luxo", "Quarto com vista para o mar", 50);
const categoriaCasal = new CategoriaQuartos("Casal", "Quarto de casal", 30);
const categoriaSolteiro = new CategoriaQuartos("Solteiro", "Quarto de solteiro", 20);

const quarto1 = new Quarto("101", "Luxo", 200, true, categoriaLuxo, "Quarto com cama de casal e vista.");
const quarto2 = new Quarto("102", "Solteiro", 120, true, categoriaSolteiro, "Quarto com uma cama.");
const quarto3 = new Quarto("103", "Casal", 130, true, categoriaCasal, "Quarto com cama de casal.");
hotel.adQuarto(quarto1);
hotel.adQuarto(quarto2);
hotel.adQuarto(quarto3);

const funcionario = new Funcionario("Carlos Silva", "12345678901", "Recepcionista", "9876-5432", "carlos@hotel.com");
hotel.adFuncionario(funcionario);

function promptt() {
  console.log("================= Cadastro =================");
  const nome = prompt("Nome: ");
  const CPF = prompt("CPF: ");
  const telefone = prompt("Número de telefone: ");
  const email = prompt("Email: ");
  const hospede = new Hospede(nome, CPF, telefone, email);
  hotel.adHospede(hospede);

  console.log("================= Reserva =================");
  const dias = Number(prompt("Dias de estadia: "));
  const checkIn = prompt("Check-in (AAAA-MM-DD): ");
  const checkOut = prompt("Check-out (AAAA-MM-DD): ");

  console.log("================= Escolha um Quarto =================");
  console.log("1 -", quarto1.exibirInfo());
  console.log("2 -", quarto2.exibirInfo());
  console.log("3 -", quarto3.exibirInfo());
  let quartoEscolhido: Quarto | null = null;

  while (!quartoEscolhido) {
    const escolha = Number(prompt("Escolha (1-Luxo, 2-Solteiro, 3-Casal): "));
    switch (escolha) {
      case 1:
        quartoEscolhido = quarto1;
        break;
      case 2:
        quartoEscolhido = quarto2;
        break;
      case 3:
        quartoEscolhido = quarto3;
        break;
      default:
        console.log("Opção inválida. Escolha novamente.");
    }
  }

  const valor = quartoEscolhido.precoBase * dias;
  console.log(`Valor total: R$${valor.toFixed(2)}`);

  const reserva = new Reserva(checkIn, checkOut, valor, true, quartoEscolhido, hospede, funcionario);
  hotel.adReserva(reserva);

  console.log("================= Pagamento =================");
  const formaPagamento = prompt("Forma de pagamento: ");
  const pagamento = new Pagamento(valor, formaPagamento, "Efetuado", "", reserva);
  reserva.adPagamento(pagamento);

  console.log("Pagamento efetuado com sucesso!");
  console.log("Hotel:", hotel.exibirHotel());
  console.log("Reserva:", reserva.exibirReserva());
}

promptt();
