

function App() {


  return (
    <>
      <Profile />
      <br />

    </>


  )
}
// Kita export komponen utama
export default App

export const Profile = () => {
  // Kita hanya dibolehkan untuk mengembalikan satu elemen saja, jika ingin mengembalikan lebih dari satu elemen, kita harus membungkusnya dengan tag div atau tag lainnya
  return (
    <div>
      <h1>Name: Tom</h1>
      <h2>Age: {20 + 8}</h2>
    </div>
  )
}