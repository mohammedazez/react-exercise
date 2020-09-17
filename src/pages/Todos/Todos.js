import React from "react";
import "./Todos.css";
// import ListItems from "./ListItems";

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.State = {
      items: [],
      hurufTerbaru: {
        text: "",
        key: "",
      },
    };
    this.tambahkanHuruf = this.tambahkanHuruf.bind(this);
    this.menanganiHuruf = this.menanganiHuruf.bind(this);
    // this.deleteItem = this.deleteItem.bind(this);
    // this.setUpdate = this.setUpdate.bind(this);
  }
  // Tambahkan Item
  tambahkanHuruf = (event) => {
    event.preventDefault();
    const itemTerbaru = this.state.hurufTerbaru;
    console.log(itemTerbaru);
    const items = [...this.state.items, itemTerbaru];
    this.setState({
      items: items,
      hurufTerbaru: {
        text: "",
        key: "",
      },
    });
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
  };
  // Input Item
  menanganiHuruf = (event) => {
    this.setState({
      hurufTerbaru: {
        text: event.target.value,
        key: Date.now(),
      },
    });
    console.log("hai menangani hurufnya bisa");
  };
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
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="judul">Masukkan To Do List Anda</h1>
          <form id="to-do-form" onSubmit={this.tambahkanHuruf}>
            <input
              type="text"
              placeholder="Masukkan Kegiatan"
              // value={this.state.hurufTerbaru.text}
              onChange={this.menanganiHuruf}
            ></input>
            <button type="submit">Add</button>
          </form>
          {/* <p>{this.state.items.text}</p> */}
          {/* <ListItems
            items={this.state.items}
            deleteItem={this.deleteItem}
            setUpdate={this.setUpdate}
          /> */}
        </header>
      </div>
    );
  }
}

export default Todos;
