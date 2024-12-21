import React, { useState } from "react";
import axios from "axios";

function Submit() {
  const [values, setValues] = useState({
    formcode: "",
    section: "",
    shift: "",
    operatorname: "",
    formdate: "",
    problemtype: "",
    stopstatus: "",
    stopdate: "",
    startdate: "",
    problemdescription: "",
  });
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/submit", values);
      console.log(response);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div>
      <h1 class="text-center display-4">Technician Form</h1>
      <form
        onsubmit={handleSubmit}
        class="bg-white rounded shadow-lg p-3 w-75 mx-auto mt-5"
      >
        <label for="formcode" class="form-label font-weight-bold">
          Form Code
        </label>
        <input
          class="form-control"
          type="text"
          placeholder="Enter Code Number"
          name="formcode"
          onChange={(e) => setValues({ ...values, formcode: e.target.value })}
          required
        />

        <label for="section" class="form-label font-weight-bold">
          Section
        </label>
        <select
          name="section"
          class="form-select mb-4"
          onChange={(e) => setValues({ ...values, section: e.target.value })}
          required
        >
          <option value="chipper">Chipper</option>
          <option value="conveyorline">Conveyor Line</option>
          <option value="dryerairgraider">Dryer Air Grader</option>
          <option value="refiner">Refiner</option>
          <option value="beforepress">Before Press</option>
          <option value="press">Press</option>
          <option value="afterpress">After Press</option>
          <option value="sandingrbs">Sanding</option>
          <option value="coolingsystem">Cooling System</option>
          <option value="steamboiler">Steam Boiler</option>
          <option value="general">General</option>
        </select>

        <label for="machinename" class="form-label font-weight-bold">
          Machine Name
        </label>
        <input
          type="text"
          class="form-control"
          name="machinename"
          placeholder="Enter Machine Name"
          onChange={(e) =>
            setValues({ ...values, machinename: e.target.value })
          }
        />

        <label for="equipmentname" class="form-label font-weight-bold">
          Equipment Name
        </label>
        <input
          type="text"
          class="form-control"
          name="equipmentname"
          placeholder="Enter Equipment Name"
          onChange={(e) =>
            setValues({ ...values, equipmentname: e.target.value })
          }
        />

        <label for="shift" class="form-label font-weight-bold">
          Shift
        </label>
        <select
          class="form-select mb-4"
          name="shift"
          onChange={(e) => setValues({ ...values, shift: e.target.value })}
        >
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>

        <label for="operatorname" class="form-label font-weight-bold">
          Operator Name
        </label>
        <input
          class="form-control"
          type="text"
          name="operatorname"
          placeholder="Enter Operator Name"
          onChange={(e) =>
            setValues({ ...values, operatorname: e.target.value })
          }
        />

        <label for="formdate" class="form-label font-weight-bold">
          Form Date
        </label>
        <input
          type="datetime-local"
          class="form-control"
          name="formdate"
          onChange={(e) => setValues({ ...values, formdate: e.target.value })}
        />

        <label for="problemtype" class="form-label font-weight-bold">
          Problem Type
        </label>
        <select
          name="problemtype"
          class="form-select mb-4"
          onChange={(e) =>
            setValues({ ...values, problemtype: e.target.value })
          }
        >
          <option value="mechanic">Mechanic</option>
          <option value="electric">Electric</option>
          <option value="utility">Utility</option>
          <option value="production">Production</option>
          <option value="metalworking">Metal Working</option>
        </select>

        <label for="stopstatus" class="form-label font-weight-bold">
          Stop Status
        </label>
        <select
          name="stopstatus"
          class="form-select mb-4"
          onChange={(e) => setValues({ ...values, stopstatus: e.target.value })}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label for="stopdate" class="form-label font-weight-bold">
          Stop Date
        </label>
        <input
          type="datetime-local"
          class="form-control"
          name="stopdate"
          onChange={(e) => setValues({ ...values, stopdate: e.target.value })}
        />

        <label for="startdate" class="form-label font-weight-bold">
          Start Date
        </label>
        <input
          type="datetime-local"
          class="form-control"
          name="startdate"
          onChange={(e) => setValues({ ...values, startdate: e.target.value })}
        />

        <label for="problemdescription" class="form-label font-weight-bold">
          Problem Description
        </label>
        <textarea
          name="problemdescription"
          class="form-control mb-4"
          cols="50"
          rows="10"
          placeholder="Enter Problem Description"
          onChange={(e) =>
            setValues({ ...values, problemdescription: e.target.value })
          }
        ></textarea>

        <div class="input-box">
          <button type="submit" class="btn btn-primary m-4 w-50">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Submit;
