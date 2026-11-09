import Cafe from "./Cafe";

const data = [
    { id: 1, nama: 'Thai Tea', harga: 25000 },
    {
        id: 2, nama: 'Thai Green Tea', harga:
            30000
    },
]


function MainMenu() {
    return (
       <Cafe data={data} />
    );
}
export default MainMenu;