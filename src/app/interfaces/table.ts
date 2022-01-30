export interface Table {
    // Entries of different expenses/payments
    entries: TableEntry[];
    categories: Set<string>;
}

export interface TableEntry {
    id: number;
    date: Date;
    category: string | Categories;
    payee: string;
    amount: number;
}

export enum Categories {
    RENT = 'Rent',
    GROCERIES = 'Groceries',
}
