import React from "react";
const categories = [
  "Animal and pets",
  "Art",
  "Architecture",
  "Cars",
  "Fashion",
  "Lifestyle"
];

const Category = ({ input, label, children }) => {
  return (
    <div>
      <div className="field">
        <label className="label">{label}</label>
      </div>
      <div>
        <select {...input}>
          <option value="">What kind of board is it?</option>
          {categories.map(val => (
            <option value={val} key={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Category;
