import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./submitstyle.css";

const Submit = () => {
  const [values, setValues] = useState({
    formcode: "",
    section: "",
    machinename: "",
    shift: "",
    operatorname: "",
    formdate: "",
    problemtype: "",
    stopstatus: "",
    stopdate: "",
    startdate: "",
    problemdescription: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/operator/operator_submit", values)
      .then((result) => {
        if (result.data.Status) {
          navigate("/operator_dashboard");
          alert("فرم با موفقیت ثبت شد");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div id="body">
      <div className="container">
        <header>Operator Submit Form</header>
        <form action="">
          <div className="form first">
            <div className="details personal">
              <span className="title">First Page</span>
              <div className="fields">
                <div className="input-field">
                  <label htmlFor="formcode">Form Code</label>
                  <input
                    type="text"
                    name="formcode"
                    id="formcode"
                    placeholder="Enter Form Code"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="formcode">Form Code</label>
                  <input
                    type="text"
                    name="formcode"
                    id="formcode"
                    placeholder="Enter Form Code"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="formcode">Form Code</label>
                  <input
                    type="text"
                    name="formcode"
                    id="formcode"
                    placeholder="Enter Form Code"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="formcode">Form Code</label>
                  <input
                    type="text"
                    name="formcode"
                    id="formcode"
                    placeholder="Enter Form Code"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="formcode">Form Code</label>
                  <input
                    type="text"
                    name="formcode"
                    id="formcode"
                    placeholder="Enter Form Code"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="formcode">Form Code</label>
                  <input
                    type="text"
                    name="formcode"
                    id="formcode"
                    placeholder="Enter Form Code"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="formcode">Form Code</label>
                  <input
                    type="text"
                    name="formcode"
                    id="formcode"
                    placeholder="Enter Form Code"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="formcode">Form Code</label>
                  <input
                    type="text"
                    name="formcode"
                    id="formcode"
                    placeholder="Enter Form Code"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="formcode">Form Code</label>
                  <input
                    type="text"
                    name="formcode"
                    id="formcode"
                    placeholder="Enter Form Code"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="formcode">Form Code</label>
                  <input
                    type="text"
                    name="formcode"
                    id="formcode"
                    placeholder="Enter Form Code"
                  />
                </div>
                <div className="input-field">
                  <label htmlFor="formcode">Form Code</label>
                  <input
                    type="text"
                    name="formcode"
                    id="formcode"
                    placeholder="Enter Form Code"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Submit;
