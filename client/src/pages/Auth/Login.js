import React,{useState} from 'react'
import Layout from '../../components/layout/Layout'
import toast from 'react-hot-toast';
import {useNavigate,useLocation} from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth';



const Login = () => {

  
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [auth, setAuth] = useAuth();

const navigate = useNavigate();
const  location = useLocation();


const handleSubmit = async(e)=>{
  e.preventDefault();

  try {
       const res = await axios.post(
       "/api/v1/auth/login",{email,password});
       if( res.data && res.data.success){
          toast.success(res.data.message);
          setAuth({
            ...auth,
            user:res.data.user,
            token:res.data.token,
          });
          localStorage.setItem('auth',JSON.stringify(res.data));
          navigate(location.state ||'/');
       }else{
          toast.error(res.data.message)
       }

  }
   catch (error) {
      console.log(error)
      toast.error("something went wrong")

  }
}


  return (
  <>
  <Layout>
   <div className='register'>
            <div className='reg-main'>
            <h1>LOG IN</h1>
            <form onSubmit={handleSubmit} >
  
  <div className="mb-3">
    
    <input type="email" 
    
    className="form-control"
    onChange={(e) =>{setEmail(e.target.value)}}
    id="exampleInputEmail" 
    placeholder='Enter Your Email'
    required
    />
   
  </div>
  
  <div className="mb-3">
    
    <input type="password" 
    
    className="form-control"
    onChange={(e) =>{setPassword(e.target.value)}}
    id="exampleInputPassword1" 
    placeholder='Enter Your Password'
    required/>
  </div>
 
  
  
  <button type="submit" className="btn btn-primary">Log In</button>
</form>
</div>
</div>
</Layout>
  </>
  )
}

export default Login
