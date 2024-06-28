// import React from 'react'
// import Layout from '../../components/layout/Layout';
// import { useCart } from '../../context/cart';
// import { useAuth } from '../../context/auth';
// import { useNavigate } from 'react-router-dom';

// const CartPage = () => {
//      const [cart,setCart] = useCart();
//      const [auth,setAuth] = useAuth();
//      const navigate = useNavigate();
//   return (
//    <>
//    <Layout>
//     <div className='container'>
//        <div className='cart'> 
//          <div col-md-12>
//           <h1 className='text-center bg-light p-2'>
//             {`Hello ${auth?.token && auth?.user?.name}`}
//           </h1>
//           <h4 className='text-center'>
//             {cart?.length > 1
//              ? `You Have ${cart.length} items in your cart!  ${auth?.token  ? "" : ".Login to Checkout"}`:"You Cart is empty"}

//           </h4>
// </div>
// </div>
//                   <div className='cart1'>
//                     <div className='payment'></div>
//                     <div className='cart-products'>
//                       {cart?.map(p =>(
//                         <div className='row'>
//                          <div className='col-md-4'>image</div>
//                          <div className='col-md-8'>details</div>
//                         </div>
//                       ))}
//                     </div>

//                 </div>
        

//     </div>
//    </Layout>
   
//    </>
//   )
// }

// export default CartPage
