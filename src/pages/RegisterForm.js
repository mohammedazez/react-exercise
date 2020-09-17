import React, { useState } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./RegisterForm.css";

function FormsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({ name, email, password, address, birthday });
    // event.target.className += " was-validated";
  };
  // submitHandler = (event) => {
  //   event.preventDefault();
  //   event.target.className += " was-validated";
  // };

  // const changeHandler = (event) => {
  //   setData(event.target.value);
  // };

  // changeHandler = (event) => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  return (
    <div className="container-utama">
      <h1>Register Form</h1>
      <div className="container yellow contaniner-utama">
        <form className="needs-validation" onSubmit={submitHandler} noValidate>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                Nama
              </label>
              <input
                // value={this.state.fname}
                // name="fname"
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="Nama Lengkap"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Email
              </label>
              <input
                // value={this.state.lname}
                // name="lname"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Masukkan Email Address"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Password
              </label>
              <input
                // value={this.state.email}
                // onChange={changeHandler}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Masukkan Password Anda"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your password with anyone else.
              </small>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Address
              </label>
              <input
                // value={this.state.city}
                // onChange={changeHandler}
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="city"
                placeholder="Masukkan Alamat"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid Address.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Birthday
              </label>
              <input
                // value={this.state.state}
                // onChange={changeHandler}
                value={birthday}
                onChange={(event) => setBirthday(event.target.value)}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="state"
                placeholder="Tanggal Lahir"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid Birthday.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Nationality
              </label>
              <input
                // value={this.state.zip}
                // onChange={changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="zip"
                placeholder="Nationality"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid Nationality.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Skills
                <select>
                  <option>Coding</option>
                  <option>Design</option>
                  <option>gaming</option>
                </select>
              </label>
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Gender
                <select>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </label>
            </MDBCol>
          </MDBRow>
          <MDBCol md="4" className="mb-3">
            <div className="custom-control custom-checkbox pl-3">
              <input
                className="custom-control-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="custom-control-label" htmlFor="invalidCheck">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </MDBCol>
          <MDBBtn color="primary" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </div>
    </div>
  );
}

export default FormsPage;
