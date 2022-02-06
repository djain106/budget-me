import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Table, Categories } from '../../interfaces/table';

const TABLE_DATA: Table = {
  entries: [
    {
      id: 1,
      amount: 10,
      category: Categories.RENT,
      date: new Date(),
      payee: 'company1',
    },
    {
      id: 2,
      amount: -2,
      category: Categories.GROCERIES,
      date: new Date(2021, 12, 18),
      payee: 'company2'
    }
  ],
  categories: new Set<string>()
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  tableName = 'Entries';
  tableData = TABLE_DATA
  dataSource = new MatTableDataSource(this.tableData.entries)

  displayedColumns: string[] = ['id', 'amount', 'date', 'category', 'payee']

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
