
import * as Service from "../service"

export const GET_EMPLOYE = 'GET_EMPLOYE';

// export const getEmploye=async (dispatch, data)=>{
//   const res=await Service.fetchEmployee()
//   debugger
//   // return dispatch=>{
//     dispatch({
//       type: GET_EMPLOYE,
//       payload:res.data
//     })
//   }
// }

export const getEmploye = (data) => {
  return (dispatch) => {
      return Service.fetchEmployee().then((response) => {
        
          // this is where the action is fired
          debugger
          dispatch({
              type: GET_EMPLOYE,
              payload: response.data
              // user:response.data
          });

          // if you want to access the result of this API call, you can return here
          // the returned promise will resolve to whatever you return here

          // return data; 
      });
  }
};

// export const getEmploye =async (data) => {
//   const res =await Service.fetchEmployee();
//   debugger
//   return dispatch=>{
//         return dispatch({
//           type:'GET_EMPLOYE',
//           payload:res.data
//         })
//       }
    // .then(task => dispatch(receiveTask(task)))
  
// }
// export const getEmploye =async () => {
//   return function(dispatch) {
//     debugger
//       return Service.fetchEmployee().then(data => {
//           // dispatch
          
//           dispatch({
//               type: 'GET_EMPLOYE',
//               data
//           });
//       });
//   };
// }

export const receiveTask = task => ({
  type: 'GET_EMPLOYE',
  task
});

export const addEmploye=(data)=>{
  return dispatch=>{
    return dispatch({
      type:'ADD_EMPLOYE',
      payload:data
    })
  }
}
export const editEmploye=(dataid)=>{
  return dispatch=>{
    return dispatch({
      type:'EDIT_EMPLOYE',
      payload:dataid
    })
  }
}
export const deleteEmploye=(data)=>{
  return dispatch=>{
    return dispatch({
      type:'DELETE_EMPLOYE',
      payload:data
    })
  }
}