import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './components/bills/bills.component';
import { EnterBudgetComponent } from './components/enter-budget/enter-budget.component';

const routes: Routes = [

  { path: '', redirectTo: '/enter-budget', pathMatch: 'full' },
  { path: 'enter-budget', component: EnterBudgetComponent },
  { path: 'bills', component: BillsComponent },
  { path: '**', redirectTo: '/enter-budget', pathMatch: 'full' } // Tiene que ir la última siempre

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
