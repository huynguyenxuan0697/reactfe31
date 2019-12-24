import {combineReducers} from "redux";
import quanLySinhVien from "./QuanLySinhVien";
import quanLyKhoaHoc from "./QuanLyKhoaHoc";
import quanLyNguoiDung from "./QuanLyNguoiDung";
export const rootReducer = combineReducers({
    quanLySinhVien,
    quanLyKhoaHoc,
    quanLyNguoiDung,
})