import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/Auth/authSlice';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
  const dispatch = useDispatch()
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: '',  
      lastName: '',
      email: '',
      password:''
    },
    onSubmit: values => {
     console.log(values);
     dispatch(signUp(values));
    },
  });
  return (
    <div className='container d- flex-column'>
      <h1 className='my-3 ' >SignUp Page</h1>
    <form onSubmit={formik.handleSubmit} className='container  d-flex flex-column w2/3'>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
      /> 

    <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
      />

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

<label htmlFor="email">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button className='btn btn-danger my-3' type="submit">Submit</button>
    </form>
    <Link to="/"> <button className='btn btn-success my-3 mx-2'>back login page</button></Link>

    </div>
  );
};

export default SignUpForm;