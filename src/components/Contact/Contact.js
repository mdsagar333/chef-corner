import { React, useContext } from "react";
import Kitchen from "../../kitchen.jpg";
import { Context } from "../../App";

export const Contact = () => {
  const { allClasses } = useContext(Context);

  return (
    <div className="container row py-5">
      <div className="col-md-6 mb-4">
        <img src={Kitchen} alt="kitchen" className="img-fluid mt-3" />
      </div>
      <form className="col-md-6">
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="form-row">
          <div className="form-group mb-3">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="form-row">
          <div className="form-group mb-3">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="inputState">Select Class</label>
            <select
              id="inputState"
              className="form-control"
              value="no class"
              onChange={() => {}}
            >
              <option value="no class">Choose...</option>
              {allClasses.map((el) => (
                <option value={el.name} key={el.id}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-group mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
