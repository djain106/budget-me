import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './reusable-components/data-table/data-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imported Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

// Imported Page Components
import { HomePageComponent } from './page-components/home-page/home-page.component';
import { MonthlyBudgetComponent } from './page-components/monthly-budget/monthly-budget.component';

// Imported pipes
import { SumPipe } from './pipes/sum.pipe';

// Other Modules
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    HomePageComponent,
    MonthlyBudgetComponent,
    SumPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    AuthModule.forRoot({
      ...env.auth,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
