import React, { Component } from 'react'

export default class DanhSachSinhVien extends Component {
    render() {
        return (
            <div>                
                    <h1 className="text-center">Quản lý sinh viên</h1>
                    <button className="btn btn-success" onClick={this.props.btnAdd}>Thêm sinh viên</button>
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
                                        onClick = {()=>this.props.handleEdit(sinhVien)} 
                                        >Edit</button>
                                        <button
                                        className="btn btn-danger"
                                        onClick={()=> this.props.handleDelete(sinhVien)}
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
