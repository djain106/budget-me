import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class SideNavBarComponent implements OnInit {
  title = 'BudgetMe';
  sidenavOpened = false;
  @ViewChild('sidenav') sidenavBar!: MatSidenav;

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateToUrl(path: string) {
    this.router.navigate([path])
    this.sidenavBar.toggle();
  }

  toggleSidebar() {
    this.sidenavBar.toggle()
  }

}
