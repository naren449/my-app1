import React from "react";

 export const  EmployeeCreateEditFomm=(props)=>{

    const [employee,setEmployee]=React.useState({ id:"",empName:"",Designation:""})

    const onSave=()=>{
        employee.id=Math.random
        props.onSaveEmployee(employee)

    }

    const onValueChange=(e)=>{
        setEmployee( {...employee,[e.target.name]:[e.target.value]}  )
    }
    return(
      <div>
        <center>
          <h4>Employee Details</h4>
          <div>
            <div className="empName">
              <label>Name</label>
            <input value={employee.empName} type="text" name="empName" onChange={onValueChange}></input>
            </div>
            <div className="empName">
              <label>Salary</label>
            <input value={employee.Designation} type="text" name="Designation" onChange={onValueChange}></input>
            </div>
          </div>
            <input type="button" value="Save" onClick={onSave} />
        </center>
      </div>
    )
}

// export default EmployeeCreateEditFomm