import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  title = 'Budget Me';

  constructor() { }

  ngOnInit(): void {
  }

}