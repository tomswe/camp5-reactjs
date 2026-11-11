import React from 'react'

export default function ProductCard({ product, onAddToCart }) {
    return (
        <div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm hover:shadow-md transition">
            <div className="text-4xl text-center py-4 bg-slate-50 rounded-lg mb-3">
                {product.image}
            </div>
            <h3 className="font-semibold text-slate-800 text-base mb-1">{product.name}</h3>
            <p className="text-emerald-600 font-bold mb-4">
                Rp {product.price.toLocaleString("id-ID")}
            </p>

            {/* Event Handler saat tombol diklik */}
            <button type="button"
                onClick={() => onAddToCart(product)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition text-sm active:scale-95"
            >
                + Tambah Keranjang
            </button>
        </div>
    )
}
