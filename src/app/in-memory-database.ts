import { InMemoryDbService } from "angular-in-memory-web-api";

import { Entry } from "./pages/entries/shared/entry.model";

export class InMemoryDatabase implements InMemoryDbService {
    createDb() {
        const categories = [
            { id: 1, name: "Moradia", description: "Pagamento de Contas da Casa" },
            { id: 2, name: "Lazer", description: "Cinema, Saúde, praia, etc" }
        ];

        const entries: Entry[] =
            [
                {
                    id: 1, 
                    name: "Gá de Cozinha",
                    categoryId: 1,
                    category: categories[0],
                    paind: true,
                    date: "14/10/2018",
                    amount: "70,80",
                    description: "Gasto do mês de abril - cartão de crédito",
                    type: "expense",
                } as Entry
            ]

        return { categories, entries };
    }

}