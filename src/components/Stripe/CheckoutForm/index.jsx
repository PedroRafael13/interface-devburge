import React, { useState } from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCart } from '../../../hooks/CartContext';
import { api } from '../../../services/api';
import '../style.css';

export function CheckoutForm() {
  const { cartProducts, clearCart } = useCart();
  const navigate = useNavigate();
  const { state: { dpmCheckerLink } = {} } = useLocation();
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
    } else if (paymentIntent?.status === 'succeeded') {
      handleOrder(paymentIntent);
    }

    setIsLoading(false);
  };

  const handleOrder = async (paymentIntent) => {
    try {
      const products = cartProducts.map((prd) => ({
        id: prd.id,
        quantity: prd.quantity,
        price: prd.price,
      }));

      const response = await api.post('/order', { products });
      if ([200, 201].includes(response.status)) {
        toast.success('Pedido realizado com sucesso!');
        clearCart();
        navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
      } else {
        toast.error('Falha ao realizar seu pedido');
      }
    } catch {
      toast.error('Ops, algo deu errado!');
    }
  };

  return (
    <div className="container">
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" />
        <button
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          {isLoading ? 'Processando...' : 'Pagar'}
        </button>
        {message && <div id="payment-message">{message}</div>}
      </form>
      <div>
        <p>
          Métodos de pagamento são exibidos dinamicamente com base na localização.&nbsp;
          <a href={dpmCheckerLink} target="_blank" rel="noopener noreferrer">
            Verificar métodos de pagamento
          </a>
        </p>
      </div>
    </div>
  );
}
