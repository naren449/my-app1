export const EmpolyeeListReducer=(state,action)=>{

    switch(action.type){


        case "UPDATE":{
            return [...state,[action.payLoad.Id],action.payLoad];

        }
        case "DELETE":{

           return state.filter((employee)=>employee.Id!==action.payLoad.Id)
        }
        case "ADD":{
            const previousStte=[...state];
            return previousStte.push(action.payLoad)

        }        
      default:
        return state;
    }
}
