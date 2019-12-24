import { LAY_DANH_SACH_KHOA_HOC, COURSE_DETAIL, SIGN_IN } from "../constants/QuanLyKhoaHoc"

const initialState = {  
    danhSachKhoaHoc: [],
    chiTietKhoaHoc:{},
    
}

const quanLyKhoaHocReducer = (state= initialState,action) =>{
    switch(action.type){
        case LAY_DANH_SACH_KHOA_HOC:
            {
                const danhSachKhoaHoc= action.data;
                return {...state,danhSachKhoaHoc}
            }
        case COURSE_DETAIL:
            {
                return {...state,chiTietKhoaHoc:action.data}
            }
        
        default:
            return state
    }
}

export default quanLyKhoaHocReducer