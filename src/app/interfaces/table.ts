export interface Table {
    // Entries of different expenses/payments
    entries: TableEntry[];
    categories: Set<string>;
}

export interface TableEntry {
    id: number;
    date: Date;
    category: string;
    payee: string;
    amount: number;
}
