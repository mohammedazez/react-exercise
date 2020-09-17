import React, { Component } from "react";
import { MDBBtn } from "mdbreact";
import "./Uppercase.css";

export class Uppercase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "muhamad aziz",
    };
  }

  memperbesarkan = (string) => {
    prompt("masukkan string anda");
    alert(string.toUpperCase());
  };

  memperkecilakan = (huruf) => {
    prompt("masukkan string anda");
    alert(huruf.toLowerCase());
  };

  //   method untuk mengecilkan
  // toLowerCase = () => {
  //   const lowerCase = this.state.text.toLowerCase();
  //   this.setState({
  //     text: lowerCase,
  //   });
  // };

  //   method untuk memperbesar
  // toUpperCase = () => {
  //   const upperCase = this.state.text.toUpperCase();
  //   this.setState({
  //     text: upperCase,
  //   });
  // };
  render() {
    return (
      <div>
        <div>
          <h1>Masukkan teks anda</h1>
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon">
                <i className="fas fa-pencil-alt prefix"></i>
              </span>
            </div>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
            ></textarea>
          </div>
        </div>
        <h1>{this.state.text}</h1>
        <MDBBtn
          onClick={() => {
            this.memperbesarkan();
          }}
          color="secondary"
        >
          Perbesar
        </MDBBtn>
        <MDBBtn
          onClick={() => {
            this.memperkecilakan();
          }}
          color="success"
        >
          perkecil
        </MDBBtn>
      </div>
    );
  }
}

export default Uppercase;
