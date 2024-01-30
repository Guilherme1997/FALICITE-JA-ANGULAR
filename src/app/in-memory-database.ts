import { InMemoryDbService } from "angular-in-memory-web-api";


import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService {
  createDb(){


    const entries: Entry[] = [
      { id: 1, name: 'Gás de Cozinha', paid: true, date: "14/10/2018", amount: "70,80", type: "expense", description: "Qualquer descrição para essa despesa" } as Entry,
      { id: 2, name: 'Suplementos', paid: false, date: "14/10/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 3, name: 'Salário na Empresa X',  paid: true, date: "15/10/2018", amount: "4405,49", type: "revenue" } as Entry,
      { id: 4, name: 'Aluguel de Filme',  paid: true, date: "16/10/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 5, name: 'Suplementos',  paid: true, date: "17/10/2018", amount: "30,00", type: "expense" } as Entry,
      { id: 6, name: 'Video Game da Filha',  paid: false, date: "17/10/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 11, name: 'Uber',  paid: true, date: "17/10/2018", amount: "30,00", type: "expense" } as Entry,
      { id: 12, name: 'Aluguel',  paid: false, date: "23/10/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 13, name: 'Gás de Cozinha',  paid: false, date: "25/10/2018", amount: "30,00", type: "expense" } as Entry,
      { id: 14, name: 'Pagamento Pelo Projeto XYZ',  paid: true, date: "25/10/2018", amount: "2980,00", type: "revenue" } as Entry,
      { id: 19, name: 'Aluguel de Filme',  paid: false, date: "07/11/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 21, name: 'Video Game da Filha', paid: true, date: "17/11/2018", amount: "30,00", type: "expense" } as Entry,
      { id: 22, name: 'Cinema',  paid: true, date: "18/11/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 23, name: 'Jiu Jitsu', paid: false, date: "21/11/2018", amount: "130,00", type: "expense" } as Entry,
      { id: 44, name: 'Uber',  paid: true, date: "28/11/2018", amount: "15,00", type: "expense" } as Entry,
      { id: 55, name: 'Cinema', paid: false, date: "28/11/2018", amount: "30,00", type: "expense" }  as Entry
    ]

    return { entries }
  }
}