import { Component, OnInit } from '@angular/core';
import { BudgetService } from 'src/app/services/budget.service';

@Component({
  selector: 'app-enter-expenses',
  templateUrl: './enter-expenses.component.html',
  styleUrls: ['./enter-expenses.component.scss']
})
export class EnterExpensesComponent implements OnInit {

  public nameBill: string = '';
  public amount: number = 0;
  public errorForm: boolean = false;
  public errorFormText: string = 'Nombre del gasto o cantidad incorrecto';
  public errorExpensive: boolean = false;
  public errorExpensiveText: string = 'Los gastos no pueden superar al presupuesto o al dinero restante';

  constructor(
    private _budgetService: BudgetService
  ) { }

  ngOnInit(): void {
  }

  addBill(){
    if ( this.amount > this._budgetService.remaining ) {
      this.errorExpensive = true;
    } else {
      this.errorExpensive = false;
    }

    if( this.nameBill === '' || this.amount <= 0 ) {
      this.errorForm = true;
    } else {
      // Creamos el objeto
      const BILL = {
        name: this.nameBill,
        amount: this.amount
      }
      // Enviamos el objeto a los subscriptores via subject
      this._budgetService.addBill( BILL );

      // Reseteamos el formulario
      this.errorForm = false;
      this.resetForm();
    }
  }

  resetForm() {
    this.nameBill = '';
    this.amount = 0;
  }

}
