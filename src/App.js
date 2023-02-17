
import './App.css';
import AppUi from './AppUi';

function App() {
  return (
    <div className="App">
     <AppUi/>
    </div>
  );
}

export default App;


// // clearData = () => {
// //   this.setState({
// //     id: 0,
// //     name: "",
// //     lname: "",
// //   });
// // };

// // else {
// //   alert("Enter Employee Details.");
// // }

// // this.clearData();
// // };



// import React from "react";
// import thunk from 'redux-thunk';
// import {Provider} from 'react-redux';
// import {applyMiddleware, combineReducers, createStore} from 'redux';
// import reducers from './app/reducers';
// import Note from "./app/maincontainer/Note";
 
// const rootReducer = combineReducers({...reducers});
// const store = createStore(rootReducer, applyMiddleware(thunk));


// function App() {
//   return (
//     <Provider store={store}>
//       <Note />
//     </Provider>
//   );
// } 
// export default App;


