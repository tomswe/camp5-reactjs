import React from 'react'


export default function CartItem({ item, onToggleSelect, onUpdateQty, onRemove }) {
    return (
        <li className="flex gap-3 py-4">
            <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => onToggleSelect(item.id)}
                aria-label={`Pilih ${item.name}`}
                className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-indigo-600"
            />

            <div className="text-3xl">{item.image}</div>

            <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                    <h4 className="truncate text-sm font-medium text-slate-700">{item.name}</h4>
                    <button
                        type="button"
                        onClick={() => onRemove(item.id)}
                        aria-label={`Hapus ${item.name}`}
                        className="text-xs text-slate-400 hover:text-red-500"
                    >
                        Hapus
                    </button>
                </div>
                <p className="text-xs text-slate-400">
                    Rp {item.price.toLocaleString("id-ID")} / item
                </p>

                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center overflow-hidden rounded-lg border border-slate-200">
                        <button
                            type="button"
                            onClick={() => onUpdateQty(item.id, -1)}
                            disabled={item.quantity === 1}
                            aria-label="Kurangi jumlah"
                            className="bg-slate-50 px-2 py-1 text-xs font-bold text-slate-600 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            −
                        </button>
                        <span className="px-3 py-1 text-xs font-semibold text-slate-700">
                            {item.quantity}
                        </span>
                        <button
                            type="button"
                            onClick={() => onUpdateQty(item.id, 1)}
                            aria-label="Tambah jumlah"
                            className="bg-slate-50 px-2 py-1 text-xs font-bold text-slate-600 hover:bg-slate-100"
                        >
                            +
                        </button>
                    </div>

                    <p className="text-sm font-semibold text-slate-800">
                        Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                    </p>
                </div>
            </div>
        </li>
    )
}
