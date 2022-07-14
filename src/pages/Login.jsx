import React from 'react'
import { useForm } from "react-hook-form";
import '../styles/login/styles.css'
import { useLogin } from '../context/LoginContext';

const Login = () => {
    const {register,formState:{errors} ,handleSubmit,setValue} = useForm();
    
    const {Login} = useLogin()

    const onSubmit = (data,e)=>{
        Login(data)
    }


  return (
   //  <div>
   //      <div className='containerLogin'>
   //      <div className='loginFormHeader'>Login de Inicio</div>
   //      <div className='loginFormBody'>
   //      <form id='formLogin' onSubmit={handleSubmit(onSubmit)}>
   //      <div className="form-group">
   //       <label htmlFor="inputEmail4">Usuario:</label>
   //       <input type="text" className="form-control" id="inputEmail4" {...register("username",{required:true})} placeholder="Código"/>
   //       {errors.username && <span className="text-danger text-small d-block mb-2">No valido</span>}
   //      </div>
   //      <div className="form-group">
   //       <label htmlFor="inputEmail4">Contraseña:</label>
   //       <input type="password" className="form-control" id="inputEmail4" {...register("password",{required:true})} placeholder="Código"/>
   //       {errors.password && <span className="text-danger text-small d-block mb-2">No valido</span>}
   //      </div>
   //      </form>
   //      </div>
   //      <div className='loginFormFooter'>
   //      <div className='d-flex align-items-end flex-column'>
   //       <div><button type="submit" form='formLogin' className="btn m-2  btn-primary mt-3">Guardar</button>
   //      <button type="reset" form='formLogin' className="btn m-2 btn-danger mt-3">Cancelar</button></div>
   //       </div>
   //      </div>
   //      </div>
     <div>
        <div className="sidenav">
         <div className="login-main-text">
            <h2>Application<br/> Login Page</h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" {...register("username",{required:true})} placeholder="User Name"/>
                     {errors.username && <span className="text-danger text-small d-block mb-2">No valido</span>}
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" {...register("password",{required:true})} placeholder="Password"/>
                     {errors.password && <span className="text-danger text-small d-block mb-2">No valido</span>}
                  </div>
                  <button style={{color:'#fff',marginTop:'4px'}} type="submit" className="btn btn-black">Login</button>
               </form>
            </div>
         </div>
         </div>
         </div>




  )
}

export default Login;
