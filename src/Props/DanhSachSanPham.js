import React, { Component } from 'react'
import SanPham from './SanPham';


export default class DanhSachSanPham extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             chiTietSanPham:{}
        }
    }
    
    xemChiTiet = (sp) => {
        this.setState({
            chiTietSanPham : sp,
        })
    }
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    {this.props.mangSanPham.map((sp,index) => (
                       <SanPham key={sp.maSP} sp={sp} xemChiTiet={this.xemChiTiet} laySanPham ={this.props.laySanPham}/>
                    ))}
                </div>
                {Object.keys(this.state.chiTietSanPham).length >0? (
                <div className="row mt-5">
                        <div className="col-md-4">
                            <img src={this.state.chiTietSanPham.hinhAnh} width="100%"/>
                        </div>
                        <div className="col-md-8">
                            <table className="table">
                                <thead>
                                    <h1>Thông số kỹ thuật</h1>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>Màn hình</td>
                                        <td>{this.state.chiTietSanPham.manHinh}</td>
                                    </tr>
                                    <tr>
                                        <td>Hệ điều hành</td>
                                        <td>{this.state.chiTietSanPham.heDieuHanh}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera trước</td>
                                        <td>{this.state.chiTietSanPham.cameraTruoc}</td>
                                    </tr>
                                    <tr>
                                        <td>Camera sau</td>
                                        <td>{this.state.chiTietSanPham.cameraSau}</td>
                                    </tr>
                                    <tr>
                                        <td>RAM</td>
                                        <td>{this.state.chiTietSanPham.ram}</td>
                                    </tr>
                                    <tr>
                                        <td>ROM</td>
                                        <td>{this.state.chiTietSanPham.rom}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </div>
                ):' '}
                
            </div>
            
        )
    }
}
