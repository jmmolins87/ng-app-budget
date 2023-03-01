import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  public budget: number = 0;
  public remaining: number = 0;
  private bills$ = new Subject<any>();

  constructor() { }

  addBill( bill: any ) {
    this.remaining -= bill.amount;
    this.bills$.next( bill );
  }

  getBills(): Observable<any> {
    return this.bills$.asObservable();
  }
}
