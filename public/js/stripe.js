/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';
var stripe = Stripe(
  'pk_test_51I7LEoBRED0gVE8BrOKtIFHbRaJVwrVMxImWNBfZbN8lMYCTG2oyTdqutsCoU5s47wAnPnZUDiZz8QlGPtDJvfMH00Egtw7lUI'
);

export const bookTour = async tourId => {
  try {
    //1. get checkout session from api endpoint
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);
    //2. create checkout form + charge the  credit card

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
