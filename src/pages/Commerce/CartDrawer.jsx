import React, { useEffect } from 'react'
import CartItem from './CartItem'
import CartSummary from './CartSummary'

export default function CartDrawer({
    isOpen, onClose, cartItems,
    onToggleSelect, onToggleAll, onUpdateQty, onRemove, onCheckout,
}) {
    // Ketika drawer tertutup
    useEffect(() => {
        if (!isOpen) return;
        const onKeyDown = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    const allChecked = cartItems.length > 0 && cartItems.every((item) => item.isChecked);

    return (
        <>
            {/* Dark Overlay untuk click to close */}
            <div
                onClick={onClose}
                className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${isOpen ? "opacity-100" : "pointer-events-none opacity-0"
                    }`}>


            </div>
            <aside
                role="dialog"
                aria-modal="true"
                aria-label="Keranjang belanja"
                inert={!isOpen}
                className={`fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                    <h2 className="text-lg font-bold text-slate-800">Keranjang</h2>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Tutup keranjang"
                        className="rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                    >
                        ✕
                    </button>
                </div>

                {cartItems.length === 0 ? (
                    <p className="flex-1 py-16 text-center text-sm text-slate-400">
                        Keranjang masih kosong.
                    </p>
                ) : (
                    <>
                        <label className="flex cursor-pointer items-center gap-3 border-b border-slate-100 px-5 py-3 text-sm text-slate-600">
                            <input
                                type="checkbox"
                                checked={allChecked}
                                onChange={(e) => onToggleAll(e.target.checked)}
                                className="h-4 w-4 accent-indigo-600"
                            />
                            Pilih semua ({cartItems.length} produk)
                        </label>

                        <ul className="flex-1 divide-y divide-slate-100 overflow-y-auto px-5">
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                    onToggleSelect={onToggleSelect}
                                    onUpdateQty={onUpdateQty}
                                    onRemove={onRemove}
                                />
                            ))}
                        </ul>

                        <CartSummary cartItems={cartItems} onCheckout={onCheckout} />
                    </>
                )}
            </aside>
        </>
    )
}
