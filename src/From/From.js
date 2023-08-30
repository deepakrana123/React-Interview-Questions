import React, { useState } from "react";
import { FormData } from "./FromConstant";
import "./From.css";
const From = () => {
  console.log(FormData, "formData");
  const [errors, setErrors] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    FormData.formData.forEach((field) => {
      if (field.required && !event.target[field.name].value) {
        console.log("hiii")
        newErrors[field.name] = field.errorMessage;
      }
      setErrors(newErrors);
    });
  };
  return (
    <div className="from">
      <div className="fromHeader">
        <h1>Config base form</h1>
      </div>
      <form style={FormData.formStyles} onSubmit={handleSubmit}>
        {FormData?.formData &&
          FormData?.formData.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              {/* <div> */}
              <label style={item.labels}>{item.label}</label>
              {item.type !== "select" ? (
                <input
                  type={item.type}
                  style={item.style}
                  name={item.name}
                  required={item.required}
                  placeholder={item.placeholder}
                />
              ) : (
                <select name={item.name} id="cars">
                  {item.type === "select" &&
                    item.options &&
                    item.options.map((item, index) => (
                      <option
                        key={index}
                        name={item.name}
                        required={item.required}
                        value={item.value}
                      >
                        {item.value}
                      </option>
                    ))}
                </select>
              )}
              {/* </div> */}
              {errors[item.name] && (
                <p style={{ color: "red" }}>{errors[item.name]}</p>
              )}
            </div>
          ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default From;
