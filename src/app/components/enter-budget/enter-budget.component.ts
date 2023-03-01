import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-budget',
  templateUrl: './enter-budget.component.html',
  styleUrls: ['./enter-budget.component.scss']
})
export class EnterBudgetComponent implements OnInit {

  public amount: number = 0;
  public incorrectAmount: boolean = false;

  constructor( 
      private _budgetService: BudgetService,
      private router: Router ) { }

  ngOnInit(): void {
  }

  addBudget() {
    if ( this.amount > 0 ) {
      this.incorrectAmount = false;
      this._budgetService.budget = this.amount;
      this._budgetService.remaining = this.amount;
      this.router.navigate(['/bills']);
    } else {
      this.incorrectAmount = true;
    }
  }

}
