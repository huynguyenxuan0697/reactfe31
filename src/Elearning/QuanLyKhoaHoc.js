import React,{useEffect, useState} from 'react'
import  KhoaHoc  from './KhoaHoc'
import axios from "axios";
import { connect } from "react-redux";
import { layDanhSachKhoaHocAction, layDanhSachKhoaHoc } from '../redux/action/QuanLyKhoaHoc';
 const QuanLyKhoaHoc = (props) => {
     useEffect(()=>{
        props.layDanhSachKhoaHoc()
        console.log(props)
     },[])
    return (
        <div className="container">
            <h1 className="text-center">Danh Sach Khoa Hoc</h1>
            <div className="row">
                {props.danhSachKhoaHoc.map(khoaHoc =>(
                    <div className="col-4" key={khoaHoc.maKhoaHoc}>
                        <KhoaHoc khoaHoc={khoaHoc}/>
                    </div>
                ))}
                </div>
            </div>
        
    )
}
const mapStateToProps = state =>({
    danhSachKhoaHoc : state.quanLyKhoaHoc.danhSachKhoaHoc
});

const mapDispatchToProps = dispatch =>({
    layDanhSachKhoaHoc: ()=> dispatch(layDanhSachKhoaHoc())
    
})


export default connect(mapStateToProps,mapDispatchToProps)(QuanLyKhoaHoc)