import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState, cartTotalState } from "../state/cartAtom";
import toast from "react-hot-toast";

const stripePromise = loadStripe("STRIPE_PUBLISHABLE_KEY"); 

interface StripeCheckoutProps {
  onSuccess: () => void;
}

function CheckoutForm({ onSuccess }: StripeCheckoutProps) {
  const stripe = useStripe();
  const elements = useElements();
  const total = useRecoilValue(cartTotalState);
  const setCart = useSetRecoilState(cartState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.error("Stripe has not loaded yet!");
      return;
    }

    // Get card info from CardElement
    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    // Simulate payment (Stripe backend call omitted for simplicity)
    try {
      toast.loading("Processing payment...");
      await new Promise(resolve => setTimeout(resolve, 1000)); // simulate delay
      toast.dismiss();
      toast.success(`Payment of $${total.toFixed(2)} successful!`);

      // Clear cart after successful payment
      setCart([]);

      // Trigger parent callback
      onSuccess();
    } catch (err) {
      console.error(err);
      toast.error("Payment failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-4 border rounded-md" />
      <button
        type="submit"
        disabled={!stripe}
        className="w-full py-3 rounded-md bg-gradient-to-r from-brand-500 to-indigo-500 text-white font-semibold hover:opacity-90 transition"
      >
        Pay ${total.toFixed(2)}
      </button>
    </form>
  );
}

export default function StripeCheckout({ onSuccess }: StripeCheckoutProps) {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm onSuccess={onSuccess} />
    </Elements>
  );
}