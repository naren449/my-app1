import React from "react";
export const EmployeeList = (props) => {
  const onEditd = (key) => {};

  const onDelete = (key) => {};

  return props?.employeeList?.map((emplyee) => {
    return (
      <div key={emplyee.id} className ='empRow'>
        <label>{emplyee.empName}</label>
        <label>{emplyee.Designation}</label>
        <button onClick={onEditd(emplyee.id)}>Edit</button>
        <button onClick={onDelete(emplyee.id)}>Delete</button>
      </div>
    );
  });
};
