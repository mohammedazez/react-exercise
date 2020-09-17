import React, { useState } from "react";
import "./Todos.css";
import { MDBBtn } from "mdbreact";

const Todos = () => {
  const [masukkanTeks, setMasukkanTeks] = useState("");
  const [teks, setTeks] = useState([]);

  // Menangani Input
  const handleChange = (event) => {
    setMasukkanTeks(event.target.value);
  };

  // Tambahkan Todo
  const tambahkanTodo = (event) => {
    event.preventDefault();
    let teksBaru = {
      id: 1,
      todo: masukkanTeks,
    };
    if (teks.length > 0) {
      teksBaru.id = teks[teks.length - 1].id + 1;
    }
    setTeks([...teks, teksBaru]);
    setMasukkanTeks("");
  };

  // Menghapus Todo
  const hapusTodo = (itemDel) => {
    let teksBaruya = teks.filter((item) => item.id !== itemDel.id);
    setTeks(teksBaruya);
    console.log(teksBaruya);
  };
  console.log(teks);
  return (
    <div>
      <div className="App">
        <header>
          <h1 className="judul">Masukkan To Do List Anda</h1>
          <form id="to-do-form">
            <input
              type="text"
              placeholder="Masukkan Kegiatan"
              onChange={handleChange}
              value={masukkanTeks}
            ></input>
            <button type="submit" onClick={tambahkanTodo}>
              Add
            </button>
          </form>
          <ul className="daftar">
            {teks.map((item) => (
              <div key={item.id}>
                <MDBBtn
                  onClick={() => {
                    hapusTodo(item);
                  }}
                  color="yellow"
                >
                  Hapus
                </MDBBtn>
                <li style={{ display: "inline" }}>{item.todo}</li>
              </div>
            ))}
          </ul>
        </header>
      </div>
    </div>
  );
};

export default Todos;

// import ListItems from "./ListItems";

// class Todos extends React.Component {
//   constructor(props) {
//     super(props);
//     this.State = {
//       items: [],
//       hurufTerbaru: {
//         text: "",
//         key: "",
//       },
//     };
// this.tambahkanHuruf = this.tambahkanHuruf.bind(this);
// this.menanganiHuruf = this.menanganiHuruf.bind(this);
// this.deleteItem = this.deleteItem.bind(this);
// this.setUpdate = this.setUpdate.bind(this);
// }
// Tambahkan Item
// tambahkanHuruf = (event) => {
//   event.preventDefault();
//   const itemTerbaru = this.state.hurufTerbaru;
//   console.log(itemTerbaru);
//   const items = [...this.state.items, itemTerbaru];
//   this.setState({
//     items: items,
//     hurufTerbaru: {
//       text: "",
//       key: "",
//     },
//   });
// if (itemTerbaru.text !== "") {
//   const items = [...this.state.items, itemTerbaru];
//   this.setState({
//     items: items,
//     hurufTerbaru: {
//       text: "",
//       key: "",
//     },
//   });
// }
// };
// Input Item
// menanganiHuruf = (event) => {
//   this.setState({
//     hurufTerbaru: {
//       text: event.target.value,
//       key: Date.now(),
//     },
//   });
//   console.log("hai menangani hurufnya bisa");
// };
// Hapus Item
// deleteItem = (key) => {
//   const filteredItems = this.state.items.filter((item) => item.key !== key);
//   this.setState({
//     items: filteredItems,
//   });
// };
// Update Item
// setUpdate = (text, key) => {
//   console.log("items:" + this.state.items);
//   const items = this.state.items;
//   items.map((item) => {
//     if (item.key === key) {
//       console.log(item.key + "    " + key);
//       item.text = text;
//     }
//   });
//   this.setState({
//     items: items,
//   });
// };
//   render() {
//     return (
//       <div className="App">
//         <header>
//           <h1 className="judul">Masukkan To Do List Anda</h1>
//           <form id="to-do-form" onSubmit={this.tambahkanHuruf}>
//             <input
//               type="text"
//               placeholder="Masukkan Kegiatan"
//               // value={this.state.hurufTerbaru.text}
//               onChange={this.menanganiHuruf}
//             ></input>
//             <button type="submit">Add</button>
//           </form>
//           {/* <p>{this.state.items.text}</p> */}
//           {/* <ListItems
//             items={this.state.items}
//             deleteItem={this.deleteItem}
//             setUpdate={this.setUpdate}
//           /> */}
//         </header>
//       </div>
//     );
//   }
// }

// export default Todos;
