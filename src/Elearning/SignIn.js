import { Formik } from 'formik';
import React, { useState, useEffect } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useDispatch  } from "react-redux";
import { signIn } from "../redux/action/QuanLyNguoiDung";
export const validation = (values) =>{
    const errors = {};
    const regexEmail=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
    const regexAccount=/^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/;
    const regexPassword =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          regexEmail.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if (!values.taiKhoan) {
            errors.taiKhoan = 'Required';
          } 
          if (!values.matKhau) {
            errors.matKhau = 'Required';
          } else if (
            regexPassword.test(values.matKhau)
          ) {
            errors.matKhau = 'Password must have minimum eight characters, at least one letter and one number:';
          }
          if(!values.hoTen){
              errors.hoTen = "Required"
          }
          if (!values.soDT){
              errors.soDT = "Required"
          }
        return errors;
}
//Sử dụng formik
const SignIn = (props) => {
    const dispatch= useDispatch();
    const handleRegisterSuccess = () =>{
        props.history.push("/login")
    }
    return (
        
        <div>
            <h1>Sign In</h1>
            <Formik
                initialValues={{ 
                    email: '', 
                    matKhau: '',
                    taiKhoan:'',
                    hoTen:'',
                    soDT:'',
                }}
                validate={validation
                }
                onSubmit={values =>dispatch(signIn(values,handleRegisterSuccess))}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                        <Form onSubmit={handleSubmit}>
                            
                            <FormGroup>
                                <Label >Tài Khoản</Label>
                                <Input 
                                type="text" 
                                name="taiKhoan" 
                                onChange={handleChange}
                                onBlur = {handleBlur}
                                value={values.taiKhoan}
                                />
                            </FormGroup>
                            {errors.taiKhoan && touched.taiKhoan && errors.taiKhoan}

                            <FormGroup>
                                <Label>Password</Label>
                                <Input 
                                type="password" 
                                name="matKhau" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.matKhau}
                                />
                            </FormGroup>
                            {errors.matKhau && touched.matKhau && errors.matKhau}

                            <FormGroup>
                                <Label>Họ tên</Label>
                                <Input 
                                type="text" 
                                name="hoTen" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.hoTen}
                                />
                            </FormGroup>
                            {errors.hoTen && touched.hoTen && errors.hoTen}

                            <FormGroup>
                                <Label>Số điện thoại</Label>
                                <Input 
                                type="text" 
                                name="soDT" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.soDT}
                                />
                            </FormGroup>
                            {errors.soDT && touched.soDT && errors.soDT}

                            <FormGroup>
                                <Label >Email</Label>
                                <Input 
                                type="email" 
                                name="email" 
                                onChange={handleChange}
                                onBlur ={handleBlur}
                               />
                            </FormGroup>
                            {errors.email && touched.email && errors.email}
                            <Button 
                            onClick={handleSubmit}
                            >Đăng ký</Button>
                        </Form>
                    )}
            </Formik>
        </div>
    )
}
export default SignIn

//--------------------------



