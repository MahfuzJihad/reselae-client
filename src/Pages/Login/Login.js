import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

 const handleLogin = event =>{
    event.preventDefault();
 }

    return (
        <div className="hero w-full">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-20 py-20">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
        <h1 className="text-5xl text-center font-bold">Login now!</h1>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Login" />
          
        </div>
      </form>
      <p className='text-center'>New to Resale website? please <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
    </div>
  </div>
</div>
    );
};

export default Login;