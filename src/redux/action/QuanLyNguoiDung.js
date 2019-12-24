import { SAVE_INFO } from "../constants/QuanLyNguoiDung";
import axios from "../../utils/axios";


export const saveInfoAction = (userInfo)=>({
    type:SAVE_INFO,
    data: userInfo
})
export const saveInfo = (values,handleSuccess)=>{
    return dispatch => {
        axios({
            method:"POST",
            url:"QuanLyNguoidung/DangNhap",
            data:values
        }).then(result=>{
            dispatch(saveInfoAction(result.data));
            localStorage.setItem("userInfo",JSON.stringify(result.data));
            handleSuccess();
        }).catch(error=>{
            console.log(error)
        })
    }
}
export const signIn = (values,handleSuccess) => { 
    return dispatch=>{
        axios.request({
            method:'POST',
            url:"QuanLyNguoiDung/DangKy",
            data:{...values,maNhom:"GP01"}
        }).then(result=>{
            handleSuccess();
        }).catch(error=>{
            console.log(error)
        })

    }
}