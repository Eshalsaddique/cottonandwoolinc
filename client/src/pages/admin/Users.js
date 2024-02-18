import React, { useState ,useEffect} from "react";
import Layout from "../../components/layout/Layout";
import AdminMenu from "../../components/layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";

const Users = () => {

  const [users,setUsers] = useState([])


  //get user

  const getUser = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/get-user");
      setUsers(data.users);
      console.log(data)
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getUser();
  }, []);


  return (
    <Layout title={"Dashboard - All Users"}>
      
      <div className="list-product">
        <h1>All Users List</h1>
        <div className="format">
          <p>Name</p>
          <p>Email</p>
          <p>Address </p>
          <p>Phone</p>
         
        </div>
        <div className="all-products">
          <hr />
          {users.map((u) => {
            return (
             
                <div className="format product-format">
                  
                  <p>{u.name}</p>
                  <p>{u.email}</p>
                  <p>{u.address}</p>
                  <p>{u.phone}</p>
                  
                </div> );
          })}
      </div>
      </div>
    </Layout>
  );
};

export default Users;