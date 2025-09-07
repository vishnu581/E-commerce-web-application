import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const CheckAuth = ({isAuthenticated , user ,children}) => {
 
    const location = useLocation()


    if(!isAuthenticated && 
        !(
            location.pathname.includes('/login')||
            location.pathname.includes('/register')
           )
           ){
            console.log(1234)
            return <Navigate to='/auth/login'/>
        
    }
    if(isAuthenticated && (location.pathname.includes('/login')||
        location.pathname.includes('/register'))){
            if(user?.role == 'admin' ){
                  console.log(1)
                return <Navigate to= '/admin/dashboard'/>
                

            }
            else{console.log(12)
                  return <Navigate to= '/shop/home'/>
            }
        }
        if(isAuthenticated && user?.role != 'admin' && location.pathname.includes('/admin')){console.log(123)
            return <Navigate to='/unauthpage'/>
        }
        if(isAuthenticated && user?.role =='admin' && location.pathname.includes('/shop')){console.log(1234)
            return <Navigate to='/admin/dashboard'/>
        }

    

        return <>{children}</>


    return()
}

export default CheckAuth