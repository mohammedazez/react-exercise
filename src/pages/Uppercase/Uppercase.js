import React, { useState } from "react";
import "./Uppercase.css";

function Uppercase() {
  const [masukanTeks, setMasukanTeks] = useState("");
  const [hasil, setHasil] = useState("");

  let handleChange = (event) => {
    let inputan = event.target.value;
    setMasukanTeks(inputan);
    let hasilTeks = inputan.toUpperCase();
    setHasil(hasilTeks);
  };
  return (
    <div>
      <h1>Masukkan teks anda</h1>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon">
            <i className="fas fa-pencil-alt prefix"></i>
          </span>
        </div>
        <textarea
          onChange={handleChange}
          value={masukanTeks}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="5"
        ></textarea>
      </div>
      <h1>{hasil}</h1>
    </div>
  );
}

export default Uppercase;
