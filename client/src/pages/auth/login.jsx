import { useState } from 'react'
import {Link} from 'react-router-dom'
import CommonForm from '@/componets/common/Form'
import { loginFormControls } from '../../assets/config'

 const initialState ={
      email:'',
      password:''
    }


const AuthLogin = () => {
   
   
     const [formData,setFormData] = useState(initialState)
      function onSubmit(){

      }
    

    
     


  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Sign in</h1>
        <p>Don't have an Account</p>
        <Link className="font-medium ml-2 text-primary hover:underline" to='/auth/register'>Register</Link>
        

      </div>
      <CommonForm 
      formControls={loginFormControls}
      buttonText={'Sign UP'}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
       />
    </div>
  )
}

export default AuthLogin