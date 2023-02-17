// import axios from 'react'
// import * as axios from 'axios';


// class service{
//   getEmploye(){
//     return axios.get(`https://63610b45af66cc87dc21409b.mockapi.io/users`)
//   }
  
// }
// export default service;


export const fetchEmployee = async() => {
  return await fetch(`https://63610b45af66cc87dc21409b.mockapi.io/users/4`)
//  await fetch(`https://63610b45af66cc87dc21409b.mockapi.io/users`).then((res)=>{
//     console.log("jdhsajmgjasdjashgjhsd",res)
//     return res.json()
   
  // })
};

// export const getEmploye = () => $.ajax({
//   method: 'GET',
//   url: `https://63610b45af66cc87dc21409b.mockapi.io/users`,
// });

// export const updateTask = task => $.ajax({
//   method: 'PATCH',
//   url: `/api/tasks/${task.id}`,
//   data: { task },
// });

// export const deleteTask = task => $.ajax({
//   method: 'DELETE',
//   url: `/api/tasks/${task.id}`,
// });
