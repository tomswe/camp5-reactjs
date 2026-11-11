import React, { useMemo } from 'react'

export default function CartSummary({ cartItems, onCheckout }) {
    const { totalItems, totalPrice } = useMemo(() => {
        const selected = cartItems.filter((item) => item.isChecked);
        return {
            totalItems: selected.reduce((acc, item) => acc + item.quantity, 0),
            totalPrice: selected.reduce((acc, item) => acc + item.price * item.quantity, 0),
        };
    }, [cartItems]);

    return (
        <div className="border-t border-slate-200 bg-slate-50 p-5">
            <div className="mb-1 flex justify-between text-sm text-slate-600">
                <span>Item dipilih</span>
                <span>{totalItems}</span>
            </div>
            <div className="mb-4 flex justify-between text-base font-bold text-slate-900">
                <span>Total Harga</span>
                <span className="text-emerald-600">Rp {totalPrice.toLocaleString("id-ID")}</span>
            </div>

            <button
                type="button"
                onClick={onCheckout}
                disabled={totalItems === 0}
                className="w-full rounded-lg bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-95 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
                Checkout ({totalItems})
            </button>
        </div>
    )
}
