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
      <h1 className="text-center text-4xl">Operator Form</h1>
      <form
        onSubmit={handleSubmit}
        className={
          "bg-white rounded-[15px] shadow-2xl p-3.5 transition-transform duration-0.2 w-[650px] text-center m-auto mt-5"
        }
      >
        <label
          htmlFor="formcode"
          className="text-sm block w-full mt-2 mb-1 text-left font-bold"
        >
          Form Code*
        </label>
        <input
          className="block w-full p-2 box-border rounded-sm text-xs"
          type="text"
          placeholder="Enter Code Number"
          name="formcode"
          onChange={(e) => setValues({ ...values, formcode: e.target.value })}
        />

        <label
          htmlFor="section"
          className="text-sm block w-full mt-2 mb-1 text-left font-bold"
        >
          section*
        </label>
        <select
          name="section"
          className="block w-full mb-4 p-2 box-border rounded"
          onChange={(e) => setValues({ ...values, section: e.target.value })}
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

        <label
          htmlFor="machinename"
          className="text-sm block w-full mt-2 mb-1 text-left font-bold"
        >
          Machine Name
        </label>
        <input
          type="text"
          className="block w-full p-2 box-border rounded-sm text-xs"
          name="machinename"
          placeholder="Enter Machine Name"
          onChange={(e) =>
            setValues({ ...values, machinename: e.target.value })
          }
        />

        <label
          htmlFor="equipmentname"
          className="text-sm block w-full mt-2 mb-1 text-left font-bold"
        >
          Equipment Name
        </label>
        <input
          type="text"
          className="block w-full p-2 box-border rounded-sm text-xs"
          name="equipmentname"
          placeholder="Enter Equipment Name"
          onChange={(e) =>
            setValues({ ...values, equipmentname: e.target.value })
          }
        />

        <label
          htmlFor="shift"
          className="text-sm block w-full mt-2 mb-1 text-left font-bold"
        >
          Shift
        </label>
        <select
          className="block w-full mb-4 p-2 box-border rounded"
          name="shift"
          onChange={(e) => setValues({ ...values, shift: e.target.value })}
        >
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>

        <label
          htmlFor="operatorname"
          className="text-sm block w-full mt-2 mb-1 text-left font-bold"
        >
          Operator Name
        </label>
        <input
          className="block w-full p-2 box-border rounded-sm text-xs"
          type="text"
          name="operatorname"
          placeholder="Enter Operator Name"
          onChange={(e) =>
            setValues({ ...values, operatorname: e.target.value })
          }
        />

        <label
          htmlFor="formdate"
          className="text-sm block w-full mt-2 mb-1 text-left font-bold"
        >
          Form Date
        </label>
        <input
          type="datetime-local"
          className="block w-full p-2 box-border rounded-sm text-xs"
          name="formdate"
          onChange={(e) => setValues({ ...values, formdate: e.target.value })}
        />

        <label
          htmlFor="problemtype"
          className="text-sm block w-full mt-2 mb-1 text-left font-bold"
        >
          Problem Type
        </label>
        <select
          name="problemtype"
          className="block w-full mb-4 p-2 box-border rounded"
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

        <label
          htmlFor="stopstatus"
          className="text-sm block w-full mt-2 mb-1 text-left font-bold"
        >
          Stop Status
        </label>
        <select
          name="stopstatus"
          className="block w-full mb-4 p-2 box-border rounded"
          onChange={(e) => setValues({ ...values, stopstatus: e.target.value })}
        >
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <label
          htmlFor="stopdate"
          className="text-sm block w-full mt-2 mb-1 text-left font-bold"
        >
          Stop Date
        </label>
        <input
          type="datetime-local"
          className="block w-full p-2 box-border rounded-sm text-xs"
          name="stopdate"
          onChange={(e) => setValues({ ...values, stopdate: e.target.value })}
        />

        <label
          htmlFor="startdate"
          className="text-sm block w-full mt-2 mb-1 text-left font-bold"
        >
          Start Date
        </label>
        <input
          type="datetime-local"
          className="block w-full p-2 box-border rounded-sm text-xs"
          name="startdate"
          onChange={(e) => setValues({ ...values, startdate: e.target.value })}
        />

        <label
          htmlFor="problemdescription"
          className="text-sm block w-full mt-2 mb-1 text-left font-bold"
        >
          Problem Description
        </label>
        <textarea
          name="problemdescription"
          className={"block w-full mb-4 p-2 box-border rounded-sm text-xs"}
          cols="50"
          rows="10"
          placeholder="Enter Problem Description"
          onChange={(e) =>
            setValues({ ...values, problemdescription: e.target.value })
          }
        ></textarea>
        <div className="input-box">
          <button
            type={"submit"}
            className={
              "submit rounded-md m-4 p-3 text-white cursor-pointer  w-2/5 text-base bg-blue-800"
            }
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Submit;
