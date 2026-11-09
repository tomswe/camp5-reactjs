import React, { useState, useEffect } from 'react'

function Counter() {
    // Membuat state untuk menyimpan data yang dinamis atau berubah-ubah
    const [count, setCount] = useState(0)
    const [counterColor, setCounterColor] = useState('skyblue')

    // komponen did mount
    useEffect(() => {
        setTimeout(() => {
            setCount(1)
        }, 1000)
        return () => {
            clearTimeout()
        }
    }, [])

    // komponen did update
    useEffect(() => {
        if (count > 0) {
            setCounterColor('green')
        } else {
            setCounterColor('skyblue')
        }
    }, [count])

    function increment() {
        // Selalu baca data saat ini bukan data sebelumnya
        // setCount(count + 1)
        // 0: count = 0, setCount(0 + 1) => count = 1

        setCount(prevCount => prevCount + 1)

    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    function reset() {
        setCount(0)
    }

    return (
        <div>
            <h2>Counter</h2>
            <p style={{ color: counterColor }}>Count: {count}</p>
            {/* <p>{count === 0 ? 'Nol' : count % 2 === 0 ? 'Genap' : 'Ganjil'}</p> */}
            <CheckEvenOddZero count={count} />
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter
// object destructuring
// const obj = { a: 1, b: 2, c: 3 }
// const { a, b, c } = obj
// console.log(a, b, c) // 1 2 3
const CheckEvenOddZero = ({ count }) => {
    // const { count } = props;

    if (count === 0) {
        return <p>Nol</p>
    }

    if (count % 2 === 0) {
        return <p>Genap</p>
    }

    return <p>Ganjil</p>
}