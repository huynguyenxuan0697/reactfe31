import { SAVE_INFO } from "../constants/QuanLyNguoiDung";

const initialState = {
    userInfo:{}
}
const quanLyNguoiDungReducer =(state=initialState,action)=>{
    switch (action.type) {
        case SAVE_INFO:
            {
                return {...state, user:action.data}
            }
    
        default:
            return state;
    }
}

export default quanLyNguoiDungReducer