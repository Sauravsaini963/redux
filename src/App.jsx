import React, { Suspense, lazy } from 'react'

import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { Navigate, Route, Routes } from 'react-router-dom';
const Home = lazy(()=> import('./assets/components/Home'));
const  LoginForm = lazy(()=>(import('./assets/components/LoginForm')));
const SignUpForm = lazy(()=>import('./assets/components/SignUPForm'));

const RouteGuard = ({children})=>{
  const token = localStorage.getItem("userToken");
  if(token){
    return children;
  }else{
   return  <Navigate to = "/login" replace={true} />
  }
}

function App() {
  

  return (
    <>
  <Suspense fallback={<h1>loading...</h1>}>
   <Routes>
   <Route path='/login' element={<LoginForm/>}/>
   <Route path='/register' element={<SignUpForm/>}/>
   <Route path='/home' element={<Home/>}/>
   </Routes>
   </Suspense>
    </>
  )
}

export default App
