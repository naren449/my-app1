import React from "react";
import {EmployeeCreateEditFomm} from "./EmolpyeeCreateEditForm";
import { EmployeeList } from "./EmployeeList";
import {EmpolyeeListReducer} from "./Reducers"
import { useReducer } from "react";

const App = () => {
  const initialData = [
    {
      id: 1,
      empName: "Narendra",
      Designation: "Developer",
    },
    {
      id: 2,
      empName: "Srikanth",
      Designation: "QA",
    },
  ];
  const [employeeList, dispatch] = useReducer(EmpolyeeListReducer, initialData);
  
  const onSave=(employeeDetails)=>{
    dispatch({ type: "ADD",  employeeDetails});
  }
  return (
    <div>
      <EmployeeCreateEditFomm />
      <EmployeeList  employeeList={employeeList} onSaveEmployee={onSave}/>
    </div>
  );
};
export default App;
