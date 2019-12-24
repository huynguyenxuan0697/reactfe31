import React, { Component } from 'react'

export default class BtVongLap extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             mangSanPham : [
                 {maSP:1, tenSP: 'IPHONE X',gia:1000},
                 {maSP:2, tenSP: 'Huawei mate 20 pro',gia:3000},
                 {maSP:3, tenSP: 'Samsung galaxy note 10',gia:2000},
             ]
        }
    }
    renderDanhSachSanPham = () => {
        return this.state.mangSanPham.map((sp,index)=>(
            <tr>
                <td>{sp.maSP}</td>
                <td>{sp.tenSP}</td>
                <td>{sp.gia}</td>
            </tr>                
        ));
    };
    
    
    render() {
        
            return (
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderDanhSachSanPham()}
                        </tbody>
                    </table>
                </div>           
                
                )


        }
    }

