import { Component } from '@angular/core';
import { CheckoutService } from '@app/core/services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  constructor(private checkoutService: CheckoutService) {}

  handleCheckout() {
    this.checkoutService.openStripeCheckoutHandler();
  }
}
