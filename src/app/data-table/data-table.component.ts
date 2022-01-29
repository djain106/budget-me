import { Component, OnInit } from '@angular/core';
import { Table } from '../interfaces/table'

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  TableData: Table = {
    entries: [
      {
        id: 1,
        amount: 10,
        category: 'groceries',
        date: new Date(),
        payee: 'company1',
      },
      {
        id: 2,
        amount: -2,
        category: 'rent',
        date: new Date(2021, 12, 18),
        payee: 'company2'
      }
    ],
    categories: new Set<string>(['groceries', 'rent'])
  }

  displayedColumns: string[] = ['id', 'amount', 'category', 'date', 'payee']

  constructor() { }

  ngOnInit(): void {
  }

}
