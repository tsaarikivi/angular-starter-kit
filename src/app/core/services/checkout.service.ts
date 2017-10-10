import { Injectable, HostListener } from '@angular/core';
import { environment } from '@env/environment';

@Injectable()
export class CheckoutService {
  private stripeCheckoutHandler: StripeCheckoutHandler;
  private amount = 0;

  constructor() {
    this.stripeCheckoutHandler = StripeCheckout.configure({
      key: environment.stripePublicKey,
      locale: 'auto',
      token: token => this.handleStripeCardTokenResponse(token)
    });
  }

  public openStripeCheckoutHandler(): void {
    this.stripeCheckoutHandler.open({
      name: 'Title',
      description: 'Description',
      image:
        'https://i.pinimg.com/736x/6e/f3/92/6ef392e37c17607009538b6ec5966b6a.jpg',
      amount: this.amount
    });
  }

  private handleStripeCardTokenResponse(
    token: stripe.StripeCardTokenResponse
  ): void {
    console.log(token, this.amount);
  }

  @HostListener('window:popstate')
  private onPopstate() {
    this.stripeCheckoutHandler.close();
  }
}
