import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState, cartTotalState } from "../state/cartAtom";
import toast from "react-hot-toast";

// ✅ Properly load Stripe using environment variable or fallback
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || "pk_test_51Nnxxxxxx..."
);

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

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    try {
      toast.loading("Processing payment...");
      // 🧠 Simulate API call delay (since no backend)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.dismiss();
      toast.success(`Payment of $${total.toFixed(2)} successful!`);

      // Clear the cart after success
      setCart([]);

      // Notify parent (CartDrawer) to close drawer
      onSuccess();
    } catch (err) {
      console.error(err);
      toast.dismiss();
      toast.error("Payment failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <CardElement className="p-4 border rounded-md dark:bg-gray-800" />
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