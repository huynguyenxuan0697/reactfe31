import React, { Component } from 'react'

export default class GioHang extends Component {
    tinhTongTien = () => {
        return this.props.sanPhamGioHang.reduce((tongTien, sp) => {
            tongTien += sp.soLuong * sp.giaBan;
            return tongTien;
        }, 0);
    }
    render() {

        return (
            <div>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Danh Sách Giỏ Hàng</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Tên SP</th>
                                            <th>Hình ảnh </th>
                                            <th>Số lượng</th>
                                            <th>Giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.sanPhamGioHang.map(sp => (
                                            <tr>
                                                <td>{sp.tenSP}</td>
                                                <td><img src={sp.hinhAnh} width="50px" /></td>
                                                <td>{sp.soLuong}</td>
                                                <td>{(sp.soLuong * sp.giaBan).toLocaleString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* dấu && như ? nhưng sẽ lượt bỏ toán tử thứ 3 của ? */}
                                {/* muốn trả về điều kiện sai thì dùng dấu || */}
                                {this.props.sanPhamGioHang.length > 0 && (<p className="text-right">Tổng tiền : {this.tinhTongTien().toLocaleString()}</p>)}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}