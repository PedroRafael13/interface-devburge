import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import React from 'react'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../style.css';

import { useCart } from '../../../hooks/CartContext'
import { api } from '../../../services/api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();

  const {
    state: { dpmCheckerLink },
  } = useLocation();

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      console.error('Stripe ou Elements com falha, tente novamente mais tarde');
      return;
    }

    setIsLoading(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: 'if_required',
    });
    if (error) {
      setMessage(error.message);
      toast.error(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      try {
        const products = cartProducts.map((prd) => {
          return { id: prd.id, quantity: prd.quantity, price: prd.price };
        });

        const response = await api.post(
          '/order',
          {
            products,
          },
          {
            validateStatus: () => true, //acesso ao status
          },
        );
        if (response.status === 200 || response.status === 201) {
          setTimeout(() => {
            navigate(
              `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
            );
          }, 2000);
          clearCart()
          toast.success('Pedido realizado com sucesso!');
        } else if (response.status === 409) {
          toast.error('Falha ao realizar seu pedido');
        } else {
          throw new Error();
        }
      } catch (error) {
        toast.error('Ops, algo deu errado!');
      }
    } else {
      navigate(
        `/complete?payment_intent_client_secret=${paymentIntent.client_secret}`,
      );
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'tabs',
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          className="button"
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          <span id="button-text">
            {isLoading ? <div className="spinner" id="spinner"></div> : 'Pagar'}
          </span>
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
      <div id="dpm-annotation">
        <p>
          Os métodos de pagamento são exibidos dinamicamente com base na
          localização do cliente, valor do pedido e moeda.&nbsp;
          <a
            className="link"
            href={dpmCheckerLink}
            target="_blank"
            rel="noopener noreferrer"
            id="dpm-integration-checker"
          >
            Visualizar métodos de pagamento por transação
          </a>
        </p>
      </div>
    </div>
  );
}