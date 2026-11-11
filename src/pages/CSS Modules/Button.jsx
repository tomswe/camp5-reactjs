import React from 'react'
import styles from './Button.module.css'

export default function CSSModule() {
    return (
        <div>
            <button type="button" className={styles.btn}>Send Chat</button>
        </div>
    )
}
