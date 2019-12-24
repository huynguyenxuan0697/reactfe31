import { LAY_DANH_SACH_KHOA_HOC, COURSE_DETAIL, SIGN_IN } from "../constants/QuanLyKhoaHoc";
import Axios from "../../utils/axios";


export const layDanhSachKhoaHocAction = (danhSachKhoaHoc) =>({
    type: LAY_DANH_SACH_KHOA_HOC,
    data: danhSachKhoaHoc,
})

export const layDanhSachKhoaHoc = () => {
    return dispatch => {
        //Gọi API 
        Axios({
            method:'GET',
            url:"QuanLyKhoaHoc/LayDanhSachKhoaHoc",        
        }).then(result =>{             
            dispatch(layDanhSachKhoaHocAction(result.data));
        }).catch(error =>{
            console.log(error)
        })
    }
}

export const courseDetailAction = (khoaHoc) => ({
    type: COURSE_DETAIL,
    data: khoaHoc
})

export const takeCourseDetail = (maKhoaHoc) =>{
    return dispatch => {
        Axios({
            method:'GET',
            url:`QuanLyKhoaHoc/LayThongTinKhoaHoc/?maKhoaHoc=${maKhoaHoc}`
        }).then(result=>{
            dispatch(courseDetailAction(result.data))
        }).catch(error=>{
            console.log(error)
        })
    }
}

