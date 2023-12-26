// Tables.js
import React from "react";

const Tables = ({ nameArr, randNumArr }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Assigned number</th>
          </tr>
        </thead>
        <tbody>
          {nameArr.map((name, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{randNumArr[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tables;
