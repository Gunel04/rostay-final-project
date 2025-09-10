import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import Swal from 'sweetalert2';
import supabase from '../../utils/supabase';
import { Outlet } from 'react-router-dom';

const DashboardLogin = ({isLogin}) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    if (!emailRef.current.value || !passwordRef.current.value) {
      Swal.fire({
        icon: "warning",
        title: "Please, enter email address and password!"
      })
    }
    else {
      const { data: user, error } = await supabase
        .from('rostay-users')
        .select("*")
        .eq('email', emailRef.current.value)
        .single();
      if (error || !user) {
        console.log("Email is not found!", error);
        return;
      }
      if (passwordRef.current.value !== user.password) {
        Swal.fire({
          icon: "error",
          title: "Password is incorrect!"
        })
        return;
      }
      if(user.role === "admin"){
        isLogin();
      }
      else{
        alert("You are not admin!")
      }
      // return <Outlet/>;
      // localStorage.setItem("user", JSON.stringify(user));

      // window.location.reload();
    }
  }
  return (
    <main style={{ height: "100vh" }} className='d-flex align-items-center justify-content-center flex-column'>
      <img src="https://demo2.themelexus.com/rostay/wp-content/uploads/2025/02/logo.svg" alt="" className='my-4' />
      <div className="login-con col-3 p-4" style={{ boxShadow: "0 0 10px black", borderRadius: "15px" }}>
        <h3 className='text-center'>Admin Login</h3>
        <Form onSubmit={handleAdminLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" ref={passwordRef} />
          </Form.Group>
          <Button className='w-100' variant="outline-warning" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </main>
  )
}

export default DashboardLogin
