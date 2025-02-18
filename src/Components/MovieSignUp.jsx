import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'; 

const MovieSignUp = () => {
  let Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const CheckData = () => {
    if (name !== "" && email !== "" && Password !== "") {
      Swal.fire({
        title: 'Success!',
        text: 'Successfully Created an Account',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        Navigate("/");
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please Enter Your Personal Data',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="bg-dark text-white py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card bg-dark text-white shadow-lg">
              <div className="card-body p-5">
                <h2 className="text-center mb-4">Sign Up</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-secondary"
                      id="name"
                      onChange={(event) => {
                        setName(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control bg-dark text-white border-secondary"
                      id="email"
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control bg-dark text-white border-secondary"
                      id="password"
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-light w-100"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent form submission
                      CheckData();
                    }}
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieSignUp;