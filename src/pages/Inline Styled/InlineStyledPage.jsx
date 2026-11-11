import React from 'react'

const Bar = ({ percent = 5 }) => {
    return (
        <div style={{
            width: `${percent}%`,
            height: '20px',
            backgroundColor: '#4f46e5',
        }}>
            {percent}%
        </div>
    )
}

export default function InlineStyledPage() {
    return (
        <div>

            <Bar percent={2} />
        </div>
    )
}
