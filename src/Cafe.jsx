

function Cafe(props) {
    console.log(props)
    return (
        <div>
            <h1>Cafe</h1>
            <ul>
                {props.data.map((item) => (
                    <Product key={item.id} item={item} />
                ))}
            </ul>
        </div>
    );
}

export default Cafe;

const Product = (props) => {

    const harga = props.item.harga + 1000
    return (
        <li key={props.item.id}>
            {props.item.nama} - Rp {harga.toLocaleString()}
        </li>
    )
}


