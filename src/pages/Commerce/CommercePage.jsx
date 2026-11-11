import React, { useCallback, useEffect, useMemo, useState } from 'react'
import ProductCard from './ProductCard.jsx'
import CartDrawer from './CartDrawer.jsx'
import { INITIAL_PRODUCTS } from '../../data/products.js'

export default function CommercePage() {
    const [cartItems, setCartItems] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [notice, setNotice] = useState("")

    // Auto Hide success message after 3 seconds
    useEffect(() => {
        if (!notice) return;
        const timer = setTimeout(() => {
            setNotice("")
        }, 3000)
        return () => clearTimeout(timer)
    }, [notice])

    // Badge melihat total carts
    const cartCount = useMemo(() => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0)
    }, [cartItems])


    const closeCart = useCallback(() => setIsCartOpen(false), [])

    const handleAddToCart = (product) => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1, isChecked: true }];
        });
        setIsCartOpen(true);
    };

    const handleUpdateQty = (productId, delta) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === productId
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const handleRemove = (productId) => {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    };

    const handleToggleSelect = (productId) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === productId ? { ...item, isChecked: !item.isChecked } : item
            )
        );
    };

    const handleToggleAll = (checked) => {
        setCartItems((prev) => prev.map((item) => ({ ...item, isChecked: checked })));
    };

    const handleCheckout = () => {
        const purchased = cartItems.filter((item) => item.isChecked);
        if (purchased.length === 0) return;
        const qty = purchased.reduce((sum, item) => sum + item.quantity, 0);
        setCartItems((prev) => prev.filter((item) => !item.isChecked));
        setIsCartOpen(false);
        setNotice(`Checkout berhasil: ${qty} item dibeli.`);
    };
    return (
        <div className="max-w-4xl mx-auto p-6 font-sans">
            <header className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold text-slate-800">Katalog Produk</h1>

                <button
                    type="button"
                    onClick={() => setIsCartOpen(true)}
                    aria-label={`Buka keranjang, ${cartCount} item`}
                    className="relative rounded-full border border-slate-200 bg-white p-3 text-xl shadow-sm hover:shadow-md transition"
                >
                    🛒
                    {cartCount > 0 && (
                        <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-xs font-bold text-white">
                            {cartCount}
                        </span>
                    )}
                </button>
            </header>

            {notice && (
                <p role="status" className="mb-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                    {notice}
                </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {INITIAL_PRODUCTS.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
                ))}
            </div>

            <CartDrawer
                isOpen={isCartOpen}
                onClose={closeCart}
                cartItems={cartItems}
                onToggleSelect={handleToggleSelect}
                onToggleAll={handleToggleAll}
                onUpdateQty={handleUpdateQty}
                onRemove={handleRemove}
                onCheckout={handleCheckout}
            />
        </div>
    )
}
