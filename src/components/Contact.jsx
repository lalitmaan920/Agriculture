import React from 'react';

export const Contact = () => {
  return (
    <div className="container mt-5 pt-5 text-center" style={{ height: "700px" }}>
      <form className="container-fluid col-12 mt-5 pt-5 bg-light min-vh-100">
        <div className="container-fluid col-md-6 mt-5 pt-5 border border-info rounded p-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label text-dark">
              Email address
            </label>
            <input
              type="email"
              className="form-control border border-info bg-light text-dark"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label text-dark">
              About You
            </label>
            <textarea
              className="form-control bg-light text-dark border border-info"
              id="exampleFormControlTextarea1"
              rows="2"
            ></textarea>
          </div>

          <div className="mb-3">
            <label htmlFor="contactNumber" className="form-label text-dark">
              Contact Number
            </label>
            <input
              type="text"
              className="form-control border border-info bg-light text-dark"
              id="contactNumber"
            />
          </div>

          <button type="submit" className="btn btn-outline-info">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
