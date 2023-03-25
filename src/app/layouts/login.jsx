import React, { useState } from 'react';
import { useParams } from 'react-router';
import LoginForm from '../components/ui/LoginForm';
import RegisterForm from '../components/ui/RegisterForm';
 
const Login = () => {

   const {type} = useParams()
   const [formType, setFormType] = useState(type==="register"?type:"login")
   const toggleFormType = (params)=>{
      setFormType(prevState=>prevState==="register"?"login":"register")
   }
   
return (
      <div className="container mt-5">
         <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    
                    {formType==="register" ?(
                    <>
                      <h3 className="mb-4">Register</h3>
                       <RegisterForm />
                        <p>Allready have account? 
                           <button
                           className='btn btn-link'
                           onClick={toggleFormType}
                           >Sign In
                           </button> 
                        </p> </>
                     )
                     :
                     (
                     <>
                       <h3 className="mb-4">Login</h3>
                         <LoginForm />
                           <p>Dont have account? 
                              <button
                                 className='btn btn-link'
                                 onClick={toggleFormType}
                              >Sign Out
                              </button> 
                           </p>
                    </>)}
               </div>
            </div>
        </div>
      )

  };
export default Login;