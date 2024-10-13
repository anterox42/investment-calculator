import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

const initialValues = {
  initialInvestment: '0',
  annualInvestment: '0',
  expectedReturn: '5',
  duration: '10',
};

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  enteredInitialInvestment = initialValues.initialInvestment;
  enteredAnnualInvestment = initialValues.annualInvestment;
  enteredExpectedReturn = initialValues.expectedReturn;
  enteredDuration = initialValues.duration;

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
    });

    this.enteredInitialInvestment = initialValues.initialInvestment;
    this.enteredAnnualInvestment = initialValues.annualInvestment;
    this.enteredExpectedReturn = initialValues.expectedReturn;
    this.enteredDuration = initialValues.duration;
  }
}
