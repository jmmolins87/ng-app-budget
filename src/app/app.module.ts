import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillsComponent } from './components/bills/bills.component';
import { EnterExpensesComponent } from './components/bills/enter-expenses/enter-expenses.component';
import { ListExpensesComponent } from './components/bills/list-expenses/list-expenses.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    BillsComponent,
    EnterExpensesComponent,
    ListExpensesComponent,
    EnterBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
