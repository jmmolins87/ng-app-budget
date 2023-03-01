import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.scss']
})
export class ListExpensesComponent implements OnInit, OnDestroy {

  public subscriptions: Subscription;
  public budget: number = 0;
  public remaining: number = 0;
  listBills: any[] = [];

  constructor( private _budgetsService: BudgetService ) {
    this.subscriptions = this._budgetsService.getBills().subscribe( data => {
      this.remaining -= data.amount; 
      this.listBills.push( data );
    })
  }

  ngOnInit(): void {
    this.budget = this._budgetsService.budget;
    this.remaining = this._budgetsService.remaining;
  }

  ngOnDestroy(): void { this.subscriptions.unsubscribe(); }

}
