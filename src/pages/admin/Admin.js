import React from 'react'
import  styles from "./Admin.module.scss"
import Navbar from '../../components/admin/adminNavbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../../components/admin/home/Home'
import AddProduct from '../../components/admin/addProduct/AddProduct'
import ViewProduct from '../../components/admin/viewProduct/ViewProduct'


const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.content}>
         {/*Admin Nested Routes */}
          <Routes>
            <Route path="home" element={<Home />}  />
            <Route path="add-product/:id" element={<AddProduct />}  />
            <Route path="all-products" element={<ViewProduct />}  />
          </Routes>
      </div>
      
    </div>
  )
}

export default Admin

