import React,{useEffect} from 'react'
import { Formik } from "formik";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { useDispatch,useSelector } from "react-redux";
import { saveInfo } from '../redux/action/QuanLyNguoiDung';

export const  validation = (values) =>{
    const error ={};
    if(!values.taiKhoan){
        error.taiKhoan="Required"
    }
    if(!values.matKhau){
        error.matKhau="Required"
    }
    return error
 }
 const Login = (props) => {
     const dispatch = useDispatch();
     const {userInfo} = useSelector(state => state.quanLyNguoiDung);
     const handleLoginSuccess = () =>{
         props.history.replace("/");
     }
     useEffect(()=>{
         if(Object.keys(userInfo).length !==0){
             props.history.push("/");
         }
     },[userInfo])
     
    return (
        <div>
            
            <h1>Sign In</h1>
            <Formik
                initialValues={{                     
                    matKhau: '',
                    taiKhoan:'',                    
                }}
                validate={validation
                }
                onSubmit={values=>dispatch(saveInfo(values,handleLoginSuccess))}
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
                                <Label >Mật khẩu</Label>
                                <Input 
                                type="password" 
                                name="matKhau" 
                                onChange={handleChange}
                                onBlur = {handleBlur}
                                value={values.matKhau}
                                />
                            </FormGroup>
                            {errors.matKhau && touched.matKhau && errors.matKhau}
                            <Button 
                            onClick={handleSubmit}
                            >Đăng nhập</Button>
                    </Form>
                )}
                    </Formik>
        </div>
    )
}
export default Login