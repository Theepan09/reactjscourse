import logo from './logo.svg';
import './App.css';
import Cars from './Cars';
import Headers from './Headers';
import Button from './Button';
import FormSubmit from './FormSubmit';
import Products from './Products';
import Module6Challenge from './Module6Challenge';
import Home from './Home'
import About from './About'
import Contact from './Contact'
import NavigationBar from './NavigationBar'
import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Error from './Error';
import ContactNumber from './ContactNumber';
import { useState } from 'react';
import Admin from './Admin';
import Module11ef from './Module11ef';
import { UserContext } from './TimeInfoContext';
import React from 'react';
import RegistrationForm from './RegistrationForm';
import Login from './Login';
import EditRegistration from './EditRegistration';
import Movies from './Movies';

// const price = 2000;
// const tax = price * 0.10;

//  const cars = ["MG Hector", "hyundai Venue", "Toyota Fortuner", "Hyundai Creta"];

//  const carList = cars.map((cars) => 
//         <li key = {cars.toString()}>{cars}</li>
// );

// const specifications = {
//   length: 4655,
//   width: 1835,
//   height: 1760
// }

// const getDimensions = specifications => (
//   `${specifications.length}(mm) ${specifications.width}(mm) ${specifications.height}(mm)`
// );

// const price = 8000;

// const result = () => {
//   if (price < 5000){
//     return <h2> Car price: {price + (price*0.05)}</h2>
//   }
//   else {
//     return <h2> Car price: {price+(price*0.15)}</h2>
//   }
// }

function App() {

  const [date, setDate] = React.useState(new Date());
  const [userInfo, setUserInfo] = React.useState('')

  const userData = JSON.parse(sessionStorage.getItem("username"))

  React.useEffect(()=>{
    if(!userData){
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup(){
      clearInterval(timerID);
    };
  }else{
    setUserInfo(userData.name)
  }
  });

  function tick(){
    setDate(new Date());
  }

  const data = [
    {name:"John", age:30, gender:"Male"},
    {name:"Mary", age:20, gender:"Female"},
    {name:"Crystal", age:19, gender:"Female"}
  ]

  // const prodData = [
  //   {
  //     img:"https://tinyurl.com/2z4ee56f",
  //     name:"Cyxus",
  //     desc:"Non-Slip Fitness Leisure Running Sneakers",
  //     price:"$29"},
    

  //   {
  //     img:"https://tinyurl.com/ypfsydte",
  //     name:"Vitike",
  //     desc:"Latest men Sneakers -Black",
  //     price:"$100"},
    

  //   {
  //     img:"https://tinyurl.com/47vkbjex",
  //     name:"Aomei",
  //     desc:"Men's Trend Casual Sports Shoe",
  //     price:"$40"
  //   }]

  //   const newprodData = [
  //     {
  //       img:"https://tinyurl.com/ycx377jd",
  //       name:"Fjallraven - Foldsack No. 1 Backpack",
  //       desc:"Your perfect pack for everyday use and walks in the forest.",
  //       price:"$109.95"},
      
  
  //     {
  //       img:"https://tinyurl.com/mwk67v87",
  //       name:"Mens casual Premium Slim Fit T-Shirts",
  //       desc:"Slim-fitting style, contrast raglan long sleeve, three-button henley placket.",
  //       price:"$22.3"},
      
  
  //     {
  //       img:"https://tinyurl.com/yhn58smv",
  //       name:"Mens Cotton Jacket",
  //       desc:"Great outwear jackets for Spring/Autumn/Winter",
  //       price:"$55.99"
  //     }]

  //     const combinedProdData = [...prodData,...newprodData];

  // const [user, setUser] = useState(null)
  // // const [user, setUser] = useState({ name: 'Admin' });


  // const Layout = () => {
  //   return (
  //     <div>
  //       <NavigationBar />
  //       <Outlet />
  //     </div>
  //   );
  // };

//   // ProtectedRoute component
// const ProtectedRoute = ({ element, user }) => {
//   return user ? element : <Navigate to="/" />;
// };

  return (
    <div>
      {/* <Headers />
      <Cars />
      <Button />
      <FormSubmit />
      <Products />
      <Module6Challenge /> */}
      {/* <Module11ef /> */}


      {/* ----------------Challenge9---------------- */}
      <UserContext.Provider value={userInfo? "Welcome " + userInfo: "The end of the world is " + date.toLocaleTimeString()}>
      <NavigationBar />
      <Routes>
        {/* <Route path="/" element={<Layout />}/> */}
          <Route path='/' element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/about/:yourname" element={<About />} />
          <Route path="/contact" element={<Contact customer={data}/>} />
          <Route path="mycontact/contactnumber" element={<ContactNumber />} />
          <Route path="registration" element={<RegistrationForm />} />
          <Route path="editregistration" element={<EditRegistration />} />
          <Route path="login" element={<Login />} />
          <Route path="error" element={<Error />} />
          {/* <Route path="product" element={<Products prodList={combinedProdData}/>} /> */}
          

          {/* Protected route for Admin page */}
        {/* <Route path="admin" element={<ProtectedRoute element={<Admin />} user={user} />} />  */}

         {/* </Route> */}
       </Routes> 
       </UserContext.Provider>
    </div>
  );

}


export default App;
