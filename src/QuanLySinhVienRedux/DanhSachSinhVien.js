import React, { Component } from 'react'
import { handleToggle, editSVAction, addSVAction, deleteSVAction, getLocalStore } from '../redux/action/QuanLySinhVien'
import { connect } from "react-redux";

class DanhSachSinhVien extends Component {
    // componentDidMount(){
    //     const data = JSON.parse(localStorage.getItem("dssv"));
    //     if(data){
    //         this.props.getLocalStore(data)    
    //     }
    // }
    // componentDidUpdate(){
    //     const mangSV = this.props.mangSV;
    //     localStorage.setItem("dssv", JSON.stringify(mangSV));
    // }
    render() {
        return (
            <div>                
                    <h1 className="text-center">Quản lý sinh viên</h1>
                    <button className="btn btn-success" onClick={this.props.onToggle}>Thêm sinh viên</button>
                    <table className="table mt-5">
                        <thead>
                            <tr>
                                <th>Mã sinh viên</th>
                                <th>Họ tên</th>
                                <th>Tuổi</th>
                                <th>Email</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.mangSV.map((sinhVien)=>(
                                <tr key={sinhVien.maSV}>
                                    <td>{sinhVien.maSV}</td>
                                    <td>{sinhVien.hoTenSV}</td>
                                    <td>{sinhVien.tuoiSV}</td>
                                    <td>{sinhVien.email}</td>
                                    <td>
                                        <button 
                                        className="btn btn-primary"
                                        onClick ={()=>{this.props.editSV(sinhVien);this.props.onToggle()}}
                                        >Edit</button>
                                        <button
                                        className="btn btn-danger"  
                                        onClick ={()=>this.props.deleteSV(sinhVien)}                                      
                                        >Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>                
            </div>
        )
    }
}
const mapStateToProps = state => ({
    mangSV : state.quanLySinhVien.mangSV,
})
const mapDispatchToProps = dispatch => ({
    onToggle : ()=>dispatch(handleToggle()),
    editSV : (maSV) => dispatch(editSVAction(maSV)),
    addSV : (sv) => dispatch(addSVAction(sv)),
    deleteSV : sv => dispatch(deleteSVAction(sv)),
    getLocalStore: storedData => dispatch(getLocalStore(storedData)),
})

export default connect(mapStateToProps,mapDispatchToProps)(DanhSachSinhVien)