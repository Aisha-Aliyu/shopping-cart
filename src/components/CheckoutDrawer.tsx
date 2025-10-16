import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { cartState, cartTotalState } from "../state/cartAtom";
import { motion, AnimatePresence } from "framer-motion";

type CheckoutDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CheckoutDrawer({ isOpen, onClose }: CheckoutDrawerProps) {
  const cart = useRecoilValue(cartState);
  const total = useRecoilValue(cartTotalState);
  const setCart = useSetRecoilState(cartState);

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const handleNext = () => {
    if (step === 1 && (!form.name || !form.email || !form.address)) return;
    if (step < 3) setStep(step + 1);
    else {
      setCart([]); // clear cart
      alert("✅ Checkout successful!");
      onClose();
      setStep(1);
      setForm({ name: "", email: "", address: "" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/40 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.aside
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white dark:bg-gray-900 z-50 shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-800">
              <h2 className="text-xl font-semibold">Checkout</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md">
                ✖
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {step === 1 && (
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500"
                  />
                  <textarea
                    placeholder="Address"
                    value={form.address}
                    onChange={e => setForm({...form, address: e.target.value})}
                    className="w-full px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Cart Summary</h3>
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between">
                      <span>{item.title} x {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="flex justify-between font-semibold mt-2">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="text-center py-20 text-green-500 font-semibold text-xl">✅ Thank you! Your order has been placed.
                </div>
              )}
            </div>

            <div className="border-t dark:border-gray-800 p-4 flex justify-between">
              {step > 1 && <button onClick={() => setStep(step - 1)} className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700">Back</button>}
              <button onClick={handleNext} className="px-6 py-2 rounded-md bg-gradient-to-r from-brand-500 to-indigo-500 text-white font-semibold">
                {step < 3 ? "Next" : "Finish"}
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}