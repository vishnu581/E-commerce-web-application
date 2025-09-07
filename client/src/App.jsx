
import './App.css'
import AdminLayout from './componets/admin-view/AdminLayout'
import Sidebar from './componets/admin-view/Sidebar'
import ShoppingLayout from './componets/shopping-view/ShoppingLayout'
import AdminDashboard from './pages/admin-view/AdminDashboard'
import AdminFeatures from './pages/admin-view/AdminFeatures'
import AdminOrders from './pages/admin-view/AdminOrders'
import AdminProducts from './pages/admin-view/AdminProducts'
import AuthLayout from './pages/auth/layout'
import AuthLogin from './pages/auth/login'
import Notfound from './pages/notfound/Notfound'
import AuthRegister from './pages/auth/register'
import {Routes , Route } from "react-router-dom"
import ShopAccountPage from './pages/shopping-view/ShopAccountPage'
import ShopCheckoutPage from './pages/shopping-view/ShopCheckoutPage'
import ShopHome from './pages/shopping-view/ShopHome'
import ShopListing from './pages/shopping-view/ShopListingPage'
import CheckAuth from './componets/common/CheckAuth'
import UnauthPage from './pages/unauth-page/UnauthPage'

function App() {

  const isAuthenticated = false
  const user = null



  
  
  return (
    <div className='flex flex-col overflow-hidden bg-white'>
   
      <Routes>
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>
        }> 
          <Route path="login" element={<AuthLogin/>} />  
          <Route path="register" element={<AuthRegister/>}/>
        </Route>
        <Route path='/admin' element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AdminLayout/>
          </CheckAuth>
        }>
           <Route path='dashboard' element={<AdminDashboard/>}/>
           <Route path='products' element={<AdminProducts/>}/>
           <Route path='orders' element={<AdminOrders/>}/>
           <Route path='features' element={<AdminFeatures/>}/>
        
        </Route>
        <Route path='/shop' element={
          <CheckAuth isAuthenticated={isAuthenticated}user={user}>
            <ShoppingLayout/>
          </CheckAuth>
        }>
          <Route path='accoount' element={<ShopAccountPage/>}/>
          <Route path='checkout' element={<ShopCheckoutPage/>}/>
          <Route path='home' element={<ShopHome/>}/>
          <Route path='listing' element={<ShopListing/>}/>
        </Route>
        <Route path='*' element={<Notfound/>} />
        <Route path='/unauthpage' element={<UnauthPage/>} />
      </Routes>

    </div>
  
  )
}

export default App
