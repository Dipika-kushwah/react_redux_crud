// import axios from 'react'

// import  createAsyncThunk from '@reduxjs/toolkit'
const initialState = {
  employees: [
    { id: 1, name: "deepika", lname: "kushwah", email: "rk@12gmail.com" },
    { id: 2, name: "deepika2", lname: "kushwah2", email: "rk@122gmail.com" },
    { id: 3, name: "deepika3", lname: "kushwah3", email: "rk@123gmail.com" },
  ],
};
// const fetchUsers= createAsyncThunk()

// export const fetchData=axios.get(`https://63610b45af66cc87dc21409b.mockapi.io/users`).then((res)=>{
//   console.log(fetchData)

//   return res.JSON()

// })

export const reducer = (state = initialState, action) => {
  debugger
  switch (action.type) {
    case "GET_EMPLOYE":
      return {
        ...state,
      };
    case "ADD_EMPLOYE":
      return {
        ...state,
        employees: state.employees.concat(action.payload),
      };
    case "EDIT_EMPLOYE":
      return {
        ...state,
        employees: state.employees.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                name: action.payload.name,
                lname: action.payload.lname,
                email:action.payload.email
              }
            : content
        ),
      };
      case 'DELETE_EMPLOYE':return{
        ...state,
        employees: state.employees.filter(item=>item.id!==action.payload)
      }
    default:
      return state;
  }
};
