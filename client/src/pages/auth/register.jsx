import { useState } from 'react'
import {Link} from 'react-router-dom'
import {registerFormControls} from "@/assets/config"
import CommonForm from '@/componets/common/Form'

 const initialState ={
      userName: '',
      email:'',
      password:''
    }


const AuthRegister = () => {
   
   
     const [formData,setFormData] = useState(initialState)
      function onSubmit(){

        console.log(formData);
        



      }
    

    
     


  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Create New Account</h1>
        <p>Already have account</p>
        <Link className="font-medium ml-2 text-primary hover:underline" to='/auth/login'>Login</Link>
        

      </div>
      <CommonForm 
      formControls={registerFormControls}
      buttonText={'Sign UP'}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit}
       />
    </div>
  )
}

export default AuthRegister