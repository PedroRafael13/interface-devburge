import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { useLocation } from 'react-router-dom'
import stripePromise from '../../config/stripeConfig';
import { CheckoutForm } from '../../components/Stripe/CheckoutForm';

export const Checkout = () => {
  const {
    state: { clientSecret },
  } = useLocation()

  if (!clientSecret) {
    return (<div>Opa, alguma coisa deu errado, tente novamente mais tarde</div>)
  }

  console.log(clientSecret)

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  )
}