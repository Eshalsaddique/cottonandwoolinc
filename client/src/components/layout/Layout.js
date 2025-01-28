import React from 'react'
import Header from './Header'
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';
import  { Toaster } from 'react-hot-toast';


const Layout = ({children}) => {
  return (
    <div>
     
     <Header/>
     <main style={{minHeight:'100vh'}}>
     <Toaster/>
      {children }
      </main>

      <Footer/>
    </div>
  )
}

export default Layout
