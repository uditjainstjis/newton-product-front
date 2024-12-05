import React, { useState } from "react";
import "./DynamicForm.css"; // Make sure this CSS file is included

const DynamicForm = ({ formData }) => {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e, type) => {
    const { name, value, checked } = e.target;

    if (type === "Checkbox") {
      setFormValues((prev) => ({
        ...prev,
        [name]: {
          ...(prev[name] || {}),
          [value]: checked,
        },
      }));
    } else {
      setFormValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formValues);
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1>{formData.title}</h1>
        <p>{formData.desc}</p>
      </div>
      <form onSubmit={handleSubmit}>
        {formData.sequence.map((field) => {
          switch (field.type) {
            case "Text":
              return (
                <div className="form-field" key={field.currentId}>
                  <label>{field.inputName}</label>
                  <input
                    type="text"
                    name={field.inputName}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    className="text-input"
                  />
                </div>
              );
            case "Radio":
              return (
                <div className="form-field" key={field.currentId}>
                  <label>{field.inputName}</label>
                  <div className="radio-group">
                    {field.placeholder.map((option, idx) => (
                      <label key={idx} className="radio-option">
                        <input
                          type="radio"
                          name={field.inputName}
                          value={option}
                          onChange={handleChange}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              );
            case "Select":
              return (
                <div className="form-field" key={field.currentId}>
                  <label>{field.inputName}</label>
                  <select
                    name={field.inputName}
                    onChange={handleChange}
                    className="select-input"
                  >
                    <option value="">Select an option</option>
                    {field.placeholder.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              );
            case "Checkbox":
              return (
                <div className="form-field" key={field.currentId}>
                  <label>{field.inputName}</label>
                  <div className="checkbox-group">
                    {field.placeholder.map((option, idx) => (
                      <label key={idx} className="checkbox-option">
                        <input
                          type="checkbox"
                          name={field.inputName}
                          value={option}
                          onChange={(e) => handleChange(e, "Checkbox")}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              );
            default:
              return null;
          }
        })}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DynamicForm;
