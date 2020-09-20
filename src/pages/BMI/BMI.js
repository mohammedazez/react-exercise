import React, { Fragment } from "react";
import "./BMI.css";

const InputPage = () => {
  return (
    <Fragment>
      <h1>Masukkan untuk menghitung BMI anda</h1>
      <div className="container">
        <div className="form-group">
          <label htmlFor="example1">Masukkan Tinggi Anda</label>
          <input
            type="text"
            id="example1"
            className="form-control form-control-lg"
          />
        </div>
        <div className="form-group">
          <label htmlFor="example2">Masukkan Berat Anda</label>
          <input
            type="text"
            id="example2"
            className="form-control form-control-md"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default InputPage;
