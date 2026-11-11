import React from 'react'
import Button from './Button'

export default function CSSTraditionalPage() {
    return (
        <div>
            <Button>Send Now</Button>
            <button className="btn">Send Email</button>
        </div>
    )
}
